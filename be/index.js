const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

// Connect to your MongoDB Atlas cluster

const atlasConnectionUri = process.env.DB_URI;

mongoose.connect(atlasConnectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Create a schema for the Slots
const slotSchema = new mongoose.Schema({
  startTime: Date,
  wardenId: String,
  bookedBy: String,
});

const Slot = mongoose.model('Slot', slotSchema);

// Create a schema for the Users
const userSchema = new mongoose.Schema({
  university_id: String,
  password: String,
  token: String,
});

const User = mongoose.model('User', userSchema);

// Endpoint to log in Warden A
app.post('/warden_a/login', async (req, res) => {
  const { university_id, password } = req.body;
  const user = await User.findOne({ university_id, password });

  if (user) {
    const token = uuid.v4();
    user.token = token;
    await user.save();
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Endpoint to list free slots for Warden B
app.get('/warden_b/free_slots', async (req, res) => {
  const slots = await Slot.find({ bookedBy: null });
  res.json(slots);
});

// Endpoint to book a slot by Warden A
app.post('/warden_a/book_slot', async (req, res) => {
  const { slot_id } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const user = await User.findOne({ token });

  if (user) {
    const slot = await Slot.findById(slot_id);
    if (slot && !slot.bookedBy) {
      slot.bookedBy = user.university_id;
      await slot.save();
      res.json({ message: 'Slot booked successfully' });
    } else {
      res.status(400).json({ message: 'Slot is not available or already booked' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Other API endpoints for Warden B, Warden C, and further actions

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
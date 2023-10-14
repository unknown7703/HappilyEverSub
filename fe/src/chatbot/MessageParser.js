// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase=message.toLowerCase();
      if(lowercase.includes("got it"))
      {
        this.actionProvider.greet();
      }
      if(!lowercase.includes("got it"))
      {
        this.actionProvider.names();
      }
    }
  }
  
  export default MessageParser;
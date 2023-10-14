import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./options/options";
import Slots from "./options/slots";
import Timings from "./options/timings";
import Age from "./options/age";
const config = {
  botName: "Enrollment bot",
  initialMessages: [
    createChatBotMessage(` Hello, Welcome to student info system! `, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "slots",
      widgetFunc: (props) => <Slots {...props} />,
    },
    {
      widgetName: "timings",
      widgetFunc: (props) => <Timings {...props} />,
    },
    { 
      widgetName: "age", 
      widgetFunc: (props) => <Age {...props} /> 
    }
  ],
};

export default config;

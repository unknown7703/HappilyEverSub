import Chatbot from "react-chatbot-kit";

import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "../chatbot.css"
const PageTwo =()=>
{
    return(<>
    <div class="flex min-h-full justify-center align items-center mt-10 ">
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /></div>
    </>);
}
export default PageTwo;
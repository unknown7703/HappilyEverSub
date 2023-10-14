class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
   greet =()=>
   {
        const message=this.createChatBotMessage(`Pick a Slot`, {
          widget:"slots",
         });
        this.addMessageToState(message);
      
   }
   slot =()=>
   {
    const message=this.createChatBotMessage(`Select timing`,{widget:"timings",});
    this.addMessageToState(message);
   }
   timing =()=>
   {
    const message=this.createChatBotMessage("Enter Your Name");
    this.addMessageToState(message);
   }
   names =()=>
   {
    const message=this.createChatBotMessage(`Enter your Age`,{widget:"age",});
    this.addMessageToState(message);
   }

   addMessageToState =(message)=>
   {
      this.setState((prevState)=>({
        ...prevState,
        messages: [...prevState.messages,message],
      }));
   };
 }
 
 export default ActionProvider;
import React,{useState} from "react";

import "./options.css";
const Slots = (props) => {
    let [slot,setSlot]=useState(" ");
    const options = [
      {
        text: "8 Oct",
        handler: props.actionProvider.slot,
        id: 1,
      },
      { text: "9 Oct", handler: props.actionProvider.slot, id: 2 },
      { text: "10 Oct", handler: props.actionProvider.slot, id: 3 },
    ];
    // const handleSlots=(e)=>{
    //     option.handler;
    //     //  setSlot=
    //     console.log(slot);
    // }
  
    const buttonsMarkup = options.map((option) => (
      <button key={option.id} onClick={option.handler} className="option-button">
        {option.text}
      </button>
    ));
  
    return <div className="options-container">{buttonsMarkup}</div>;
  };

  export default Slots;
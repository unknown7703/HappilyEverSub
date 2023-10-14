import React from "react";
import "./options.css";
const Timings = (props) => {
    const options = [
      {
        text: "12 PM",
        handler: props.actionProvider.timing,
        id: 1,
      },
      { text: "2 PM", handler: props.actionProvider.timing, id: 2 },
      { text: "5 PM", handler: props.actionProvider.timing, id: 3 },
    ];
  
    const buttonsMarkup = options.map((option) => (
      <button key={option.id} onClick={option.handler} className="option-button">
        {option.text}
      </button>
    ));
  
    return <div className="options-container">{buttonsMarkup}</div>;
  };

  export default Timings;
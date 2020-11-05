import React from "react";
import './style.css'

function Message(props) {
  let boxView = props.sender === "Bot" ? "answer" : "sender"  
  return (
    <div className={boxView}>
      <p>{props.text}</p>
      <p className="name">{props.sender}</p>
    </div>
  );
}

export default Message;

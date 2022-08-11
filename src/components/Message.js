import React from "react";
import { auth } from "../firebase";
const Message = ({ message }) => {
  return (
    <div className="messages">
      {message && message.uid == auth.currentUser.uid && (
        <div style={{ alignSelf: "self-end", marginRight: "30px" }}>
          <p className="sender">{message.name}</p>
          <p className="message">{message.text}</p>
        </div>
      )}

      {message && message.uid != auth.currentUser.uid && (
        <div style={{ alignSelf: "self-start", marginLeft: "30px" }}>
          <p className="sender">{message.name}</p>
          <p className="message">{message.text}</p>
        </div>
      )}
    </div>
  );
};

export default Message;

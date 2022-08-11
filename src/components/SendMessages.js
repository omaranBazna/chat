import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
const SendMessages = () => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
  };
  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        value={input}
        placeholder="message"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessages;

import { addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
const SendMessages = () => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
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

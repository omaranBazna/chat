import { addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { serverTimestamp, collection } from "firebase/firestore";

const SendMessages = ({ scroll }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input == "") {
      alert("please Enter some valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form className="form-style" onSubmit={sendMessage}>
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

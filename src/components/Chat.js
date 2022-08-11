import { onSnapshot, orderBy, query, collection } from "firebase/firestore";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Message from "./Message";

import { db } from "../firebase";
const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapchat) => {
      let messages = [];
      querySnapchat.forEach((doc) => {
        messages.push({ ...doc.data, id: doc.id });
      });
      setMessages(messages);
      return unsubscribe;
    });
  }, [messages]);
  return (
    <>
      <main>
        <Message />
      </main>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;

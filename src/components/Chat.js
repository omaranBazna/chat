import { onSnapshot, orderBy, query, collection } from "firebase/firestore";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Message from "./Message";

import { db } from "../firebase";
import SendMessages from "./SendMessages";

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapchat) => {
      let messagesArr = [];
      querySnapchat.forEach((doc) => {
        messagesArr.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesArr);

      return unsubscribe;
    });
  }, []);
  return (
    <>
      <main>
        {messages &&
          messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}
      </main>
      <span ref={scroll}></span>
      <SendMessages scroll={scroll} />
    </>
  );
};

export default Chat;

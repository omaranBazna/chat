import React from "react";
import { useState, useRef, useEffect } from "react";
import Message from "./Message";
const Chat = () => {
  const scroll = useRef();
  return (
    <>
      <main></main>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;

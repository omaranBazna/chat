import React from "react";
import { useState } from "react";
const SendMessages = () => {
  const [input, setInput] = useState("");
  return (
    <form>
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

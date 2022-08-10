import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Logout = () => {
  const signOutF = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={signOutF}>Logout</button>
    </div>
  );
};

export default Logout;

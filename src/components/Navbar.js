import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./Signin";
import Logout from "./Logout";
export default function Navbar() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="navbar">
      <h1>Chat app</h1>
      <Signin />
    </div>
  );
}

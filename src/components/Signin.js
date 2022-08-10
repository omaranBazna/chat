import React from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
const Signin = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default Signin;

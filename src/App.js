import logo from "./logo.svg";
import "./App.css";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App">
      <Navbar />
      <Signin />
    </div>
  );
}

export default App;

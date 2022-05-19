import React from "react";
import DashBoard from "./components/DashBoard/DashBoard";
import "./App.css";
import R from "./routes";
import SingIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";


function App() {

  return (
    <div className="App">
      <SingIn/>
      {/* <SignUp/> */}
      {/* <DashBoard/> */}
      {/* <R/> */}
    </div>
  );
}

export default App;

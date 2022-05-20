import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import R from "./routes";
import SingIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import HomeAfterLogin from "./components/HomeAfterLogin/HomeAfterLogin";
import ScreenQrCode from "./components/ScreenQrCode/ScreenQrCode";
import "./App.css";


function App() {

  return (
    
    <div className="App">
      {/* <SingIn/> */}
      {/* <SignUp/> */}
      {/* <HomeAfterLogin/> */}
      {/* <ScreenQrCode/> */}
      {/* <DashBoard/> */}
      <R/>
      
    </div>
  );
}

export default App;

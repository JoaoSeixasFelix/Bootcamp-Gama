import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import HomeAfterLogin from "./components/HomeAfterLogin/HomeAfterLogin";
import ScreenQrCode from "./components/ScreenQrCode/ScreenQrCode";

const R: React.FC = () => {
  return (
    
    <Router>

      <Routes>

        <Route
          path="/dashboard"
          caseSensitive={false}
          element={<DashBoard />}
        />

        <Route path="/signin" 
               caseSensitive={false} 
               element={<SignIn />} 
        />

        <Route path="/signup" 
               caseSensitive={false} 
               element={<SignUp />}
        />

        <Route
          path="/userhome"
          caseSensitive={false}
          element={<HomeAfterLogin />}
        />

        <Route
          path="/Qrcode"
          caseSensitive={false}
          element={<ScreenQrCode />}
        />


      </Routes>
      
    </Router>

  );

};

export default R;

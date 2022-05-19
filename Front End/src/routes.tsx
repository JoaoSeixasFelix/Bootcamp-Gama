import React from "react";
import DashBoard from "./components/DashBoard/DashBoard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/ComponentsSignIN/Inputs/Input";

const R: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<DashBoard />} />
        {/* <Route path="/SignIn" caseSensitive={false} element={<SignIn />} /> */}
      </Routes>
    </Router>
  );
};

export default R;

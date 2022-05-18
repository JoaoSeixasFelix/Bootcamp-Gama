import React from "react";
import DashBoard from "./components/DashBoard/DashBoard";
import "./App.css";
import Navigation from "./components/Menu/Header/menu";


function App() {

  return (
    <div className="App">
      <Navigation />
      <DashBoard/>
    </div>
  );
}

export default App;

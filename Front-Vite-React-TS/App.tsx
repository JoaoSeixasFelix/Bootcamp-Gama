import { useState } from "react";
import DashBoard from "./components/DashBoard/DashBoard";
import "./App.css";
import Navigation from "./components/Menu/Header/menu";
import MenuSideButtons from "./components/Menu/SideButtons/MenuSideButtons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <DashBoard/>
    </div>
  );
}

export default App;

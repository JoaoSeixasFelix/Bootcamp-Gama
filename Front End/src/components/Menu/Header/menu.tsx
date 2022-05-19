import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Navigation = () => {
  return (

    <div
      style={{
        position: "fixed",
        display: "flex",
        width: "100%",
        height: "64px",
        boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.4)",
        backgroundColor: "#C4C4C4",
      }}
    >
      {/* <Link to={"/SingIn"}>Cadastre-se</Link> */}
    </div>
  );
};

export default Navigation;

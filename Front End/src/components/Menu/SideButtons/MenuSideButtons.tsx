import React from "react";
import "./MenuSideButtons.css";

export default function SideButtons() {
  return (
    <div className="nav-button">

      <div className="my-programs img-text">
        <img
          src="./src/components/Pictures/fact_check.svg"
          alt="Meus Programas"
          width={"20px"}
          height={"20px"}
          style={{ marginTop: "24px", marginRight:"30px" }}
          className="picture1"
        ></img>

        <p className="nav-button-style">Meus Programas</p>

      </div>

      <div className="statistics">

        <img
          src="./src/components/Pictures/analytics.svg"
          alt="Estatisticas"
          width={"20px"}
          height={"20px"}
          style={{ marginTop: "40px", marginRight:"30px" }}
          className="picture1"
        ></img>

        <p className="nav-button-style">Estatiticas</p>

      </div>

      <div className="clients">

        <img
          src="./src/components/Pictures/people.svg"
          alt="Clientes"
          width={"20px"}
          height={"20px"}
          style={{ marginTop: "40px", marginRight:"30px" }}
          className="picture1"
        ></img>

        <p className="nav-button-style">Clientes</p>

      </div>

      <div className="support">

        <img
          src="./src/components/Pictures/help.svg"
          alt="Suporte"
          width={"20px"}
          height={"20px"}
          style={{ marginTop: "40px", marginRight:"30px" }}
          className="picture1"
        ></img>

        <p className="nav-button-style">SUPORTE</p>

      </div>

      <div className="quit">

      <img
          src="./src/components/Pictures/apple.svg"
          alt="Sair"
          width={"20px"}
          height={"20px"}
          style={{ marginTop: "15px", marginRight:"10px" }}
          className="picture1"
        ></img>

        <p>SAIR</p>

      </div>

    </div>
  );
}

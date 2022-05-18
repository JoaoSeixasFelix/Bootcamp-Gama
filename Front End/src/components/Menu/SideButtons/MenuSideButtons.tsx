import React from "react";
import './MenuSideButtons.css'


export default function SideButtons(){

    return(
        <div className="nav-button">

            <div className="my-programs img-text">
              <img
                    src="../src/Pictures/fact_check.svg"
                    alt="location"
                    width={"9px"}
                    height={"15px"}
                    style={{ paddingBottom: "2px" }} className="picture1"
                    ></img>

                <p className="nav-button-style">Meus Programas</p>

            </div>

            <div className="statistics">
              <p className="nav-button-style">Estatiticas</p>
            </div>

            <div className="clients">
              <p className="nav-button-style">Clientes</p>
            </div>

            <div className="support">
              <p className="nav-button-style">SUPORTE</p>
            </div>

            <div className="quit">
              <p>SAIR</p>
            </div>
       
        </div>
    )
}
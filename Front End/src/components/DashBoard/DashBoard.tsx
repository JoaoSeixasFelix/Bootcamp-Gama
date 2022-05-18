import React from "react";
import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import "./DashBoard.css";

export default function dashBoard() {
  return (
    <div className="side-bar">
      <div>
        <Picture />
        <AdressAndContact />
      </div>
      <Description />
      <SideButtons />
    </div>
  );
}

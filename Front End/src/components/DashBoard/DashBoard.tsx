import React from "react";
import { Link } from "react-router-dom";
import AdressAndContact from "../Menu/AdressAndContact/AdressAndContact/AdressAndContact";
import Navigation from "../Menu/Header/menu";
import Picture from "../Menu/PictureRestaurant/PictureRestaurant";
import Description from "../Menu/RestaurantDescription/RestaurantDescription";
import SideButtons from "../Menu/SideButtons/MenuSideButtons";
import HeaderScreen from "../Screen/HeaderScreen";
import "./DashBoard.css";

export default function dashBoard() {
  return (
    <div className="side-bar">
      <Navigation />
      <div>
        <Picture />
        <Description />
        <AdressAndContact />
        <SideButtons />
        <HeaderScreen />
      </div>
    </div>
  );
}

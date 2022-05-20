import React from "react"
import Next from "../ComponentsHomeAfterLogin/ButtonNext/ButtonNext"
import DescriptionEvent from "../ComponentsHomeAfterLogin/DescriptionEvent/DescriptionEvent"
import HeaderUserName from "../ComponentsHomeAfterLogin/HeaderUserName/HeaderUserName"
import NavBarApp from "../ComponentsHomeAfterLogin/NavigationBar/NavigationBar"
import './HomeAfterLogin.css'


export default function HomeAfterLogin() {
    return(
        <div className="AfterLogin">
        <HeaderUserName/>
        <DescriptionEvent/>
        <Next/>
        <NavBarApp/>
        </div>
        
    )
}
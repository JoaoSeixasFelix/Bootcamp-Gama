import React from "react"
import IconsSignUp from "../ComponentsSignUp/IconsLogins/IconsLogins"
import InputSignUp from "../ComponentsSignUp/Inputs/Input"
import Logo from "../ComponentsSignUp/Logo/Logo"
import SignUpInfo from "../ComponentsSignUp/SingInInfo/SignUpInfo"
import './SignUp.css'


export default function SignUp() {
    return(
        <div className="signup-layout">
        <Logo/>
        <SignUpInfo/>
        <InputSignUp/>
        <IconsSignUp/>
        </div>
        
    )
}
import React from "react"
import './SignIn.css'
import ButtonSignUp from "../ComponentsSignIN/ButtonSingUp/ButtonSignUp"
import ResetPassword from "../ComponentsSignIN/ForgotPassword/ForgotPassword"
import IconsLogin from "../ComponentsSignIN/IconsLogins/IconsLogins"
import InputSignIn from "../ComponentsSignIN/Inputs/Input"
import Logo from "../ComponentsSignUp/Logo/Logo"
import SingInInfo from "../ComponentsSignIN/SingInInfo/SingInInfo"
import { Link } from "react-router-dom"
import SignUp from "../SignUp/SignUp"

export default function SignIn() {
    return(
        <div className="signin-layout">
        <Logo/>
        <SingInInfo/>
        <InputSignIn/>
        <ResetPassword />
        <IconsLogin/>
        <nav>
        <Link to={"/SignUp"}>
        <ButtonSignUp/>
        </Link>
        </nav>
        
        </div>
        
    )
}
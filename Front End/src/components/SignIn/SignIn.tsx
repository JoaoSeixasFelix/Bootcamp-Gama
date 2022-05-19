import React from "react"
import './SignIn.css'
import ButtonSignUp from "../ComponentsSignIN/ButtonSingUp/ButtonSignUp"
import ResetPassword from "../ComponentsSignIN/ForgotPassword/ForgotPassword"
import IconsLogin from "../ComponentsSignIN/IconsLogins/IconsLogins"
import InputSignIn from "../ComponentsSignIN/Inputs/Input"
import Logo from "../ComponentsSignUp/Logo/Logo"
import SingInInfo from "../ComponentsSignIN/SingInInfo/SingInInfo"

export default function SignIn() {
    return(
        <>
        <Logo/>
        <SingInInfo/>
        <InputSignIn/>
        <ResetPassword />
        <IconsLogin/>
        <ButtonSignUp/>
        </>
        
    )
}
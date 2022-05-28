import Input from "../components/Input";
import { useState, useCallback, FormEvent } from "react";
import { api } from "./api/api";
import Button from "../components/Button";
import Logo from "../components/Logo";
import axios from "axios";


const SignUp = () => {
  const [signUpNameInput, setSignUpNameInput] = useState("");
  const onChangeLogin = (login: string) => {
    console.log(signUpNameInput);
    setSignUpNameInput(login);
  };
  
  const [signUpEmailInput, setSignUpEmailInput] = useState("");
  const onChangeEmail = (email: string) => {
    console.log(signUpEmailInput);
    setSignUpEmailInput(email);
  };

  const [signUpPassWordInput, setSignupPassWordInput] = useState("");
  const onChangePassword = (pass: string) => {
    console.log(signUpPassWordInput);
    setSignupPassWordInput(pass);
  };


  const userLogin = {
    name: signUpNameInput,
    email: signUpEmailInput,
    password: signUpPassWordInput,
  };

  
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api.post("e81ccdd9-b940-49d4-bee5-0ebd60c47de3", userLogin);
    },
    [userLogin]
  );

  return (
    <div
      className="Container
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    h-3/4
                    w-screen"
    >
      <Logo />

      <div
        className="flex flex-col
                      justify-start
                      items-start
                      w-52 mr-28 text-3xl
                      font-Poppins text-slate-900"
      >
        <span>Seja</span>
        <span>bem-vindo!</span>
      </div>

      <form
        className="flex 
                       flex-col 
                       items-center justify-center
                       h-2/4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          onValueChange={onChangeLogin}
          name="login"
          placeholder="Nome Completo"
          value={signUpNameInput}
          type={"text"}
          size="w-full"
          bgColor="white"
          textColor="white"
          borderColor="border-green-300"
          marginBottom="mb-7"
        />

        <Input
          onValueChange={onChangeEmail}
          name="signup-email"
          placeholder="E-mail"
          type={"email"}
          value={signUpEmailInput}
          borderColor="border-green-300"
          size="w-full"
          bgColor="white"
          textColor="white"
          marginBottom="mb-7"
        />

        <Input
          onValueChange={onChangePassword}
          name="password"
          placeholder="Password"
          type={"password"}
          value={signUpPassWordInput}
          borderColor="border-green-300"
          size="w-full"
          bgColor="white"
          textColor="white"
        />

        <Button
          onClick={() => {}}
          type={"submit"}
          width="w-80"
          height="h-12"
          backGroundColor="bg-slate-900"
          textColor="text-white"
          borderColor="border-indigo-900"
          marginBottom="mt-5"
          padding="py-2 px-4"
        >
          {" "}
          Cadastre-se!{" "}
        </Button>
      </form>
    </div>
  );
};


export default SignUp;

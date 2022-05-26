import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Logo from "../components/Logo";

const SignUp = () => {
  const [nameInput, setNameInput] = useState("");
  const onChange = (str: string) => {
    setNameInput(str);
  };

  const [passWordInput, setpassWordInput] = useState("");
  const onChangePassword = (pass: string) => {
    setpassWordInput(pass);
  };

  const [emailInput, setemailInput] = useState("");
  const onChangeEmail = (email: string) => {
    setemailInput(email);
  };

  return (
    <div className=" block items-center w-full h-screen py-3">
      <Logo />

      <div className="flex flex-col
                      items-start 
                      w-52 
                      ml-9 text-3xl font-Poppins text-slate-900">
                        
        <span>Seja</span>
        <span>bem-vindo!</span>
        
      </div>

      <form className="flex 
                       flex-col items-center justify-center h-1/3 mt-8">
        <Input
          onChange={onChange}
          name="login"
          placeholder="Nome Completo"
          value={nameInput}
          type={"text"}
          size="w-80"
          bgColor="white"
          textColor="white"
          borderColor="border-green-300"
          marginBottom="mb-7"
        />

        <Input
          onChange={onChangeEmail}
          name="signup-email"
          placeholder="E-mail"
          type={"email"}
          value={emailInput}
          borderColor="border-green-300"
          size="w-80"
          bgColor="white"
          textColor="white"
          marginBottom="mb-7"
        />

        <Input
          onChange={onChangePassword}
          name="password"
          placeholder="******************"
          type={"password"}
          value={passWordInput}
          borderColor="border-green-300"
          size="w-80"
          bgColor="white"
          textColor="white"
        />

        <Button
          onClick={() => console.log("I Like Geuci")}
          type={"submit"}
          width="w-80"
          height="h-12"
          backGroundColor="bg-slate-900"
          textColor="text-white"
          borderColor="border-indigo-900"
          marginBottom="mt-8"
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

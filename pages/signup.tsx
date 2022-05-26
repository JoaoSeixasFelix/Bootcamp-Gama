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
    <div className="Container
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    h-3/4
                    w-screen">
      
      <Logo />

      <div className="flex flex-col
                      justify-start
                      items-start
                      w-52 mr-28 text-3xl
                      font-Poppins text-slate-900">
                        
        <span>Seja</span>
        <span>bem-vindo!</span>
        
      </div>

      <form className="flex 
                       flex-col 
                       items-center justify-center
                       h-2/4">
        <Input
          onChange={onChange}
          name="login"
          placeholder="Nome Completo"
          value={nameInput}
          type={"text"}
          size="w-full"
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
          size="w-full"
          bgColor="white"
          textColor="white"
          marginBottom="mb-7"
        />

        <Input
          onChange={onChangePassword}
          name="password"
          placeholder="Password"
          type={"password"}
          value={passWordInput}
          borderColor="border-green-300"
          size="w-full"
          bgColor="white"
          textColor="white"
        />

        <Button
          onClick={() => console.log("I Like Geuci")}
          type={"button"}
          width="w-80"
          height="h-12"
          backGroundColor="bg-slate-900"
          textColor="text-white"
          borderColor="border-indigo-900"
          marginBottom="mt-5"
          padding="py-2 px-4"
        > Cadastre-se! </Button>

      </form>

    </div>

  );
};

export default SignUp;

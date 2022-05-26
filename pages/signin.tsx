import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Logo from "../components/Logo";
import SocialMediaLogin from "../components/SocialMediaIcons";

const SignIN = () => {
  const [nameInput, setNameInput] = useState("");
  const onChange = (str: string) => {
    setNameInput(str);
  };

  const [passWordInput, setpassWordInput] = useState("");
  const onChangePassword = (pass: string) => {
    setpassWordInput(pass);
  };

  return (
    <div
      className="
      sm:text-center
      flex 
      flex-col 
      items-center 
      justify-center 
      h-screen 
      w-screen
      "
    >
      <Logo />

      <div className="flex mr-56 text-4xl text-zinc-500 font-Poppins">
        <Description salutation="Olá!" />
      </div>

      <form
        className="flex
          flex-col
          items-center
          justify-start
          w-screen h-1/3 mt-8 mb-12"
      >
        <Input
          onChange={onChange}
          name="login"
          placeholder="Username"
          value={nameInput}
          type={"text"}
          size="w-80"
          bgColor="white"
          textColor="white"
          borderColor="border-green-300"
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
          marginTop="mt-8"
          marginBottom="mb-6"
          padding="py-2 px-4"
        >
          {" "}
          Entrar{" "}
        </Button>

        <a href="">
          <Description forgotyourpassword="Esqueceu sua senha?" />
        </a>
      </form>

      <span className="">
        <SocialMediaLogin />
      </span>

      <a
        href="/signup"
        className="
        flex 
        flex-col 
        justify-center 
        items-center 
        w-screen 
        mt-10"
      >
        <Description forgotyourpassword="Entre para o Fid+" />

        <Button
          onClick={() => console.log("Cadastro!")}
          type={"button"}
          width="w-80"
          height="h-12"
          backGroundColor="transparent"
          textColor="text-slate-900"
          border="border-2"
          borderColor="border-blue-900"
          marginTop="mt-3.5"
          marginBottom="mb-14"
          padding="py-2 px-4"
        >
          {" "}
          Cadastre-se!{" "}
        </Button>
      </a>
    </div>
  );
};

export default SignIN;

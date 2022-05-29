import Input from "../components/Input";
import { useState, useCallback, FormEvent } from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Logo from "../components/Logo";
import SocialMediaLogin from "../components/SocialMediaIcons";
import { api } from "../services/api";
import Link from "next/link";

const SignIN = () => {
  const [nameInput, setNameInput] = useState("");
  const onChangeLogin = (login: string) => {
    setNameInput(login);
    console.log(nameInput);
  };

  const [passWordInput, setPassWordInput] = useState("");
  const onChangePassword = (pass: string) => {
    console.log(passWordInput);
    setPassWordInput(pass);
  };


  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api.post("e81ccdd9-b940-49d4-bee5-0ebd60c47de3", {
        name: nameInput,
        password: passWordInput,
      });
    },
    [nameInput, passWordInput]
  );

  return (
    <div
      className=" text-center
                     box-border
                     flex 
                     flex-col 
                     items-center 
                     justify-center 
                     h-full
                     w-screen "
    >
      <Logo />

      <div
        className="flex mr-56 text-4xl 
                      text-zinc-500
                      font-Poppins"
      >
        <Description salutation="Olá!" />
      </div>

      <form
        className="flex
                       flex-col
                       items-center
                       justify-start
                       w-screen h-72 mt-8 mb-0"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          onValueChange={onChangeLogin}
          name="login"
          placeholder="Username"
          value={nameInput}
          type={"text"}
          size="w-80"
          bgColor="white"
          textColor="white"
          borderColor="border-green-500"
        />

        <Input
          onValueChange={onChangePassword}
          name="password"
          placeholder="Password"
          type={"password"}
          value={passWordInput}
          borderColor="border-green-500"
          size="w-80"
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
          marginTop="mt-8"
          marginBottom="mb-6"
          padding="py-2 px-4"
        >
          {" "}
          Entrar{" "}
        </Button>

        <Link href={"/"}>
          <a>
            <Description forgotyourpassword="Esqueceu sua senha?" />
          </a>
        </Link>
      </form>

      <span className="IconsLoginSocialMedia">
        <SocialMediaLogin />
      </span>

      <Link href={"/signup"}>
        <a
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
      </Link>
    </div>
  );
};

export default SignIN;

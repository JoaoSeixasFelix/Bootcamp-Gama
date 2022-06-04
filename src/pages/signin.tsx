import { useState, useCallback, FormEvent, useContext, useRef } from "react";
import Link from "next/link";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import Input from "../components/ComponentsGenerics/Input";
import Button from "../components/ComponentsGenerics/Button";
import Description from "../components/Description";
import Logo from "../components/Logo";
import SocialMediaLogin from "../components/SocialMediaIcons";
import Router from "next/router";

const SignIN = () => {
  const { signIn, user } = useContext(AuthContext);
  const [nameInput, setNameInput] = useState("");
  const [passWordInput, setPassWordInput] = useState("");
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({
        email: "bolao3s2@hotmail.com ",
        password: "bolao123",
      });
      Router.push('/userhome')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-hidden h-full w-screen flex flex-col items-center justify-center">
      <div className="flex mr-48">
        <Logo />
      </div>
      <form
        className="flex flex-col items-center justify-center w-screen h-72 mt-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex mr-56 mb-8 text-4xl text-zinc-500 font-Poppins">
          <Description salutation="Olá!" />
        </div>
        <Input
          onValueChange={(e) => setNameInput(e)}
          name="login"
          placeholder="Username"
          value={nameInput}
          type={"text"}
          size="w-80"
          bgColor="white"
          textColor="white"
          borderColor="border-green-500"
          required
        />

        <Input
          onValueChange={(e) => setPassWordInput(e)}
          name="password"
          placeholder="Password"
          type={"password"}
          value={passWordInput}
          borderColor="border-green-500"
          size="w-80"
          bgColor="white"
          textColor="white"
          required
        />

        <Button
          onClick={() => {}}
          type={"submit"}
          width="w-80"
          height="h-12"
          backGroundColor="bg-slate-900"
          textColor="text-white"
          marginTop="mt-4"
          marginBottom="mb-4"
          padding="py-2 px-4"
        >
          {" "}
          Entrar{" "}
        </Button>

        <Link href={"/forgotpassword"}>
          <a>
            <Description forgotyourpassword="Esqueceu sua senha?" />
          </a>
        </Link>
      </form>

      <span className="IconsLoginSocialMedia">
        <SocialMediaLogin />
      </span>

      <Link href={"/signup"}>
        <a className=" flex flex-col justify-center items-center w-screen mt-8">
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
            marginTop="mt-4"
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

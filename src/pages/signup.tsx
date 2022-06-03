import { useState, useCallback, FormEvent } from "react";
import axios from "axios";
import Input, { Selection } from "../components/ComponentsGenerics/Input";
import { api } from "../services/api";
import Button from "../components/ComponentsGenerics/Button";
import Logo from "../components/Logo";

const SignUp = () => {
  const [signUpNameInput, setSignUpNameInput] = useState("");
  const [signUpTypeClient, setSignUpTypeClient] = useState("");
  const [signUpEmailInput, setSignUpEmailInput] = useState("");
  const [signUpPassWordInput, setSignupPassWordInput] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api.post("e81ccdd9-b940-49d4-bee5-0ebd60c47de3", {
        name: signUpNameInput,
        typeclient: signUpTypeClient,
        email: signUpEmailInput,
        password: signUpPassWordInput,
      });
    },
    [signUpEmailInput, signUpEmailInput, signUpTypeClient, signUpPassWordInput]
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="flex mr-48 -mt-40 mb-28">
        <Logo />
      </div>
      <form
        className="flex flex-col items-center justify-center h-72 mt-6"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex flex-col justify-start items-start w-52 mr-28 mb-3 mt-6 text-3xl font-Poppins text-slate-900">
          <span>Seja</span>
          <span>bem-vindo!</span>
        </div>
        <Input
          onValueChange={(e) => setSignUpNameInput(e)}
          name="login"
          placeholder="Nome Completo"
          value={signUpNameInput}
          type={"text"}
          size="w-full"
          bgColor="white"
          textColor="text-gray-700"
          borderColor="border-green-300"
          marginBottom="mb-7"
          required
        />

        <Selection
          onValueChange={(e) => setSignUpTypeClient(e)}
          name="typeOfClient"
          placeholderSelection="Tipo de Cliente"
          value={signUpTypeClient}
          borderColor="border-green-300"
          width="w-80"
          bgColor="bg-white"
          textColor="text-gray-400"
          marginBottom="mb-7"
        />

        <Input
          onValueChange={(e) => setSignUpEmailInput(e)}
          name="signup-email"
          placeholder="E-mail"
          type={"email"}
          value={signUpEmailInput}
          borderColor="border-green-300"
          size="w-full"
          bgColor="white"
          textColor="black"
          marginBottom="mb-7"
          required
        />

        <Input
          onValueChange={(e) => setSignupPassWordInput(e)}
          name="password"
          placeholder="Password"
          type={"password"}
          value={signUpPassWordInput}
          borderColor="border-green-300"
          size="w-full"
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
          borderColor="border-indigo-900"
          marginBottom="mb-16"
          marginTop="mt-5"
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

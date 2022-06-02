import { type } from "os";
import { useState } from "react";
import Button from "../components/ComponentsGenerics/Button";
import Input from "../components/ComponentsGenerics/Input";

type;

const ForgotPassWord = () => {
  const [email, setEmail] = useState();

  return (
    <div>
      <div className=" w-screen h-screen flex flex-col items-center justify-center">
        <div className=" bg-slate-200 rounded-3xl max-w-xl flex flex-col w-80 h-72 ">
          <div className="flex flex-col h-1/2 justify-center items-center">
            <h1 className="text-slate-900 text-2xl font-Poppins mb-4">
              Esqueceu sua Senha?
            </h1>
            <p className="text-base text-slate-900 -mb-5">Informe seu email abaixo</p>
          </div>
          <div className="h-1/2 flex flex-col justify-end items-center">
            <Input
              onValueChange={(e) => setEmail(e)}
              name={"email"}
              value={email}
              size={"w-72"}
              placeholder="Email"
              type={"text"}
              bgColor="white"
              textColor="text-gray-700"
              borderColor="border-white"
              marginBottom="mb-3
              "
              required
            />
            <Button
              onClick={() => {}}
              type={"submit"}
              width="w-72"
              height="h-12"
              backGroundColor="bg-slate-900"
              textColor="text-white"
              marginTop="mt-1"
              marginBottom="mb-14"
              padding="py-2 px-4"
            >
              Redifinir Senha
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassWord;

import Image from "next/image";
import Button from "../components/ComponentsGenerics/Button";
import Middle from "../../public/illustration-mockups.svg";
import Logo from "../../public/Logo/Logo.svg";
import LogoEsquerda from "../../public/Logo/LogoLateralEsquerdo.svg";
import LogoDireito from "../../public/Logo/LogoLateralDireito.svg";
import Link from "next/link";

const LadingPage = () => {
  return (
    <div className="overflow-hidden h-screen w-screen">
      <nav className="">
        <div className="flex bg-green-500">
          <div className="mt-2 w-1/6 flex ml-2">
            <Image src={Logo} height={56} width={100} />
          </div>
          <div className="font-Poppins text-white flex list-none items-center justify-end w-5/6">
            <Link href={"/signup"}>
              <span className="mr-3 cursor-pointer">Cadastrar</span>
            </Link>
            <Link href={"/signin"}>
              <span className="cursor-pointer mr-6">Entrar</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="h-9.5 overflow-y-auto">
        <div className="flex h-full">
          <div className="grid sm:grid-cols-2 justify-center items-center">
            <div>
              <Image src={Middle} />
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              voluptate laboriosam eum enim dolorem debitis voluptatem?
              Provident rerum, nesciunt, omnis harum molestiae esse non
              laboriosam accusamus aut quibusdam quo illum.
            </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute flex w-full h-16 justify-between bottom-0">
        <Image src={LogoEsquerda} />
        <Image src={Logo} />
        <Image src={LogoDireito} className={""} />
      </footer>
    </div>
  );
};

export default LadingPage;

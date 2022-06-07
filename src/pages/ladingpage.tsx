import Image from "next/image";
import HomeLadingPage from "../../public/LadingPage/HomePage.png";
import MobilePrototipo from "../../public/LadingPage/5.png";
import Logo from "../../public/Logo/Logo.svg";
import LogoEsquerda from "../../public/Logo/LogoLateralEsquerdo.svg";
import LogoDireito from "../../public/Logo/LogoLateralDireito.svg";
import Link from "next/link";

const LadingPage = () => {
  return (
    <div className="overflow-hidden">
      <nav>
        <div className="flex bg-Fig">
          <div className="w-1/6 flex ml-2">
            <Image src={Logo} />
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

      <div className="h-9/10 overflow-y-auto flex flex-col justify-start">
        <div className="flex w-full justify-center">
          <Image src={HomeLadingPage} width={2311} />
        </div>
        <div className="grid sm:grid-cols-2 justify-center items-center m-8">
          <Image src={MobilePrototipo} className="rounded-3xl" />
          <p className="font-Poppins text-left sm:text-xl mx-4 mt-5 mb-5">
            Fid+ Conecte e Fidelize. É o programa de Gestão de Fidelidade
            Digital para os restaurantes que os restaurantes criem e gerenciem
            seus programas de fidelidade, e tenham um melhor controle de seus
            usuarios.
          </p>
        </div>

        <footer className="flex w-full h-full justify-between items-end">
          <Image src={LogoEsquerda} />
          <Image src={Logo} />
          <Image src={LogoDireito} />
        </footer>
      </div>
    </div>
  );
};

export default LadingPage;

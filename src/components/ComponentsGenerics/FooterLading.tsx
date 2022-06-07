import Image from "next/image";
import Logo from "../../../public/Logo/Logo.svg";
import LogoEsquerda from "../../../public/Logo/LogoLateralEsquerdo.svg";
import LogoDireito from "../../../public/Logo/LogoLateralDireito.svg";

export const Footer = () => {
  return (
    <div className=" mt-14 h-full flex sm:max-h-14 items-start">
      <footer className="inline-block w-full">
        <div className="flex justify-between items-start h-full w-full">
          <Image src={LogoEsquerda} />
          <Image src={Logo} />
          <Image src={LogoDireito} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

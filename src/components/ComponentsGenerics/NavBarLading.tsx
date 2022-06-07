import Image from "next/image";
import Logo from "../../../public/Logo/Logo.svg";
import Link from "next/link";

export const NavBarLading = () => {
  return (
    <nav>
      <div className="flex h-1/10 bg-Fig">
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
  );
};

export default NavBarLading
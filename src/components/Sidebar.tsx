import Image from "next/image";
import MyPrograms from "../../public/Icons/fact_check.svg";
import Statics from "../../public/Icons/analytics.svg";
import Clients from "../../public/Icons/people.svg";
import HelpDesk from "../../public/Icons/help.svg";
import LogOut from "../../public/Icons/logout.svg";
import Localization from "../../public/Icons/location_on.svg";
import PhoneNumber from "../../public/Icons/call.svg";
import RestaurantSaborMineiro from "../../public/RestaurantPictures/RestauranteSaborMineiro.svg";
import Link from "next/link";
import classNames from "classnames";

export const SideBar = () => {
  return (
    <div className="-mb-24 pb-11 flex flex-col w-60 h-screen shadow-md bg-gray-100">
      <div className="Header pt-4 pb-2 px-6">
        <div className="flex items-center h-2/5 mt-7 flex-col">
          <div className="rounded-lg w-32 h-32">
            <Image src={RestaurantSaborMineiro} />
          </div>
          <div className="flex flex-col mt-4 font-Poppins text-2xl">
            <span className="flex ">Restaurante</span>
            <span className="flex">Sabor Mineiro</span>
          </div>
          <div>
            <div className="flex w-full items-center justify-center mt-3">
              <Image src={Localization} height={60} className="mt-52" />
              <span className="flex ml-3 ">Rua da Bahia,1000</span>{" "}
            </div>
            <div className="flex w-full items-center -mt-3">
              <Image src={PhoneNumber} height={60} />
              <span className="flex ml-3">(31) 3333-3333</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-3/5">
        <div className="w-full flex flex-col justify-start mt-10 h-3/5 font-Poppins text-lg">
          <div className="h 4/5">
            <Link href={"./home"}>
              <div className={`My Programs flex ml-7 mb-14 cursor-pointer`}>
                <Image src={MyPrograms} style={{ cursor: "pointer" }} />
                <p className="ml-3 ">Meus Programas</p>
              </div>
            </Link>
            <Link href={"./statistics"}>
              <div className="Estatisticas flex ml-7 mb-14 cursor-pointer">
                <Image src={Statics} style={{ cursor: "pointer" }} />
                <p className="ml-3">Estastísticas</p>
              </div>
            </Link>
            <Link href={"./clients"}>
              <div className="Clientes flex ml-7 mb-14 cursor-pointer">
                <Image src={Clients} style={{ cursor: "pointer" }} />
                <p className="ml-3">Clientes</p>
              </div>
            </Link>
            <Link href={"./suport"}>
              <div className="Suporte flex ml-7 mb-14 cursor-pointer">
                <Image src={HelpDesk} style={{ cursor: "pointer" }} />
                <p className="ml-3">Suporte</p>
              </div>
            </Link>
          </div>
          <div className="flex w-full h-full mt-28">
            <div className="Logout flex h-full ml-7 cursor-pointer">
              <Image src={LogOut} style={{ cursor: "pointer" }} />
              <p className="ml-3">Sair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

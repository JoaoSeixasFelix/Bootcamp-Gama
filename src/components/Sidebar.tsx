import Image from "next/image";
import MyPrograms from "../../public/Icons/fact_check.svg";
import Statics from "../../public/Icons/analytics.svg";
import Clients from "../../public/Icons/people.svg";
import HelpDesk from "../../public/Icons/help.svg";
import LogOut from "../../public/Icons/logout.svg";
import Localization from "../../public/Icons/location_on.svg";
import PhoneNumber from "../../public/Icons/call.svg";

export const SideBar = () => {
  return (
    <>
      <div className="w-60 h-full shadow-md bg-gray-100">
        <div className="pt-4 pb-2 px-6">
          <div className="flex items-center h-2/5 mt-7 flex-col">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-lg w-32 h-32"
              alt="Avatar"
            />
            <div className="flex flex-col mt-4 font-Poppins text-2xl">
              <span className="flex ">Restaurante</span>
              <span className="flex">Sabor Mineiro</span>
            </div>
            <div>
              <div className="flex w-full items-center justify-center mt-3">
                <Image src={Localization} height={60} className="mt-52" />
                <span className="flex ml-3 ">Rua da Bahia,1000</span>
              </div>
              <div className="flex w-full items-center -mt-3">
                <Image src={PhoneNumber} height={60} />
                <span className="flex ml-3">(31) 3333-3333</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start mt-10 h-3/5 font-Poppins text-lg">
          <div className="My Programs flex ml-7 mb-14">
            <Image src={MyPrograms} />
            <p className="ml-3 ">Meus Programas</p>
          </div>
          <div className="Estatisticas flex ml-7 mb-14">
            <Image src={Statics} />
            <p className="ml-3">Estastísticas</p>
          </div>
          <div className="Clientes flex ml-7 mb-14">
            <Image src={Clients} />
            <p className="ml-3">Clientes</p>
          </div>
          <div className="Suporte flex ml-7 mb-14">
            <Image src={HelpDesk} />
            <p className="ml-3">Suporte</p>
          </div>
          <div className="Logout flex ml-7 mt-56">
            <Image src={LogOut} />
            <p className="ml-3">Sair</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

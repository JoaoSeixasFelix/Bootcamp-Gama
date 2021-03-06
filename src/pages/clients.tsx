import MyClients from "../components/MyClients";
import SideBar from "../components/Sidebar";
import LogoDesktop from "../../public/Logo/LogoFigPlus.svg";
import Image from "next/image";

export const HomePage = () => {
  return (
    <div className=" overflow-y-hidden flex flex-col w-full h-full">
      <div className="Header flex justify-center h-16 w-full items-center bg-green-400">
        <Image src={LogoDesktop} />
      </div>
      <div className="flex h-5/6 w-full">
        <div className="flex flex-col h-full">
          <SideBar />
        </div>
        <div className="w-full">
          <MyClients />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

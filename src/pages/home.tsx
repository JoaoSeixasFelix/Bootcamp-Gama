import MyClients from "../components/MyClients";
import MyPrograms from "../components/MyPrograms";
import SideBar from "../components/Sidebar";
import Statistics from "../components/Statistics";
import HelpDesk from "../components/Suport";
import LogoDesktop from "../../public/Logo/LogoFigPlus.svg";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const HomePage = () => {

  const {} = useContext(AuthContext)


  return (
    <div className=" overflow-y-hidden block flex-col w-full h-full">
      <div className=" Header flex justify-center h-16 w-full items-center bg-green-400">
        <Image src={LogoDesktop} />
      </div>

      <div className="flex h-5/6 w-full">
        <div className="flex flex-col h-full">
          <SideBar />
        </div>
        <div className="w-full">
          <MyPrograms />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

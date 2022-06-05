import MyClients from "../components/MyClients";
import MyPrograms from "../components/MyPrograms";
import SideBar from "../components/Sidebar";
import Statistics from "../components/Statistics";
import HelpDesk from "../components/Suport";
import LogoDesktop from "../../public/Logo/LogoFigPlus.svg";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export const HomePage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const tester = async () => {
      const userdb = await api.get(
        `restaurant/8bba89da-f58d-428e-b8f9-1699bfce3d39`
      );
    };
  }, []);

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

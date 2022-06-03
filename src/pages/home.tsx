import Description from "../components/Description";
import MyClients from "../components/MyClients";
import MyPrograms from "../components/MyPrograms";
import SideBar from "../components/Sidebar";
import Statistics from "../components/Statistics";
import HelpDesk from "../components/Suport";
import TableClients from "../components/TableClients";

export const HomePage = () => {
  const screens = [0, 1, 2, 3, 4];
  // const newscreens = screens.map(())

  return (
    <div className=" flex flex-col w-full h-full">
      
      <div className=" Header flex h-14 w-full bg-green-400">
        <p>asas</p>
      </div>

      <div className="flex h-5/6 w-full">
        <div className="flex flex-col h-full">
          <SideBar />
        </div>
        <div className="w-full">
          <MyPrograms />
          {/* <MyClients/> */}
          {/* <Statistics/> */}
          {/* <HelpDesk/> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import Description from "../components/Description";
import MyClients from "../components/MyClients";
import MyPrograms from "../components/MyPrograms";
import SideBar from "../components/Sidebar";
import Statistics from "../components/Statistics";
import TableClients from "../components/TableClients";

export const HomePage = () => {
  const screens = [0, 1, 2, 3, 4];

  return (
    <div className="h-full w-screen flex flex-col">
      <div className="flex h-16 w-screen bg-green-400">
        <p>asas</p>
      </div>
      <div className="h-full w-full flex">
        <div className="">
          <SideBar />
        </div>
        <div className="w-full">
            <MyPrograms/>
            {/* <MyClients/> */}
            {/* <Statistics/> */}
            </div>
      </div>
    </div>
  );
};

export default HomePage;

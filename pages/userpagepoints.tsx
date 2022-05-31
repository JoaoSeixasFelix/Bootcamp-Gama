import NavBar from "../components/NavBar";
import { ScreenPoints } from "../components/MaterialUI/MenuList";
import Promotion from "../public/promotion-sneakers.svg";
import Modal from "../components/MaterialUI/ModalQr";

const userPagePoints = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center mb-5">
      <div className="flex flex-col h-1/4">
        <NavBar
          name="Joao Felix"
          activePoints="border-b-2"
          colorPoints="border-black"
        />
      </div>
      <div className="fixed left-0 bottom-0 z-20">
        <Modal />
      </div>
      <div className="w-screen overflow-auto h-3/4 mb-6 mt-3">
        <div className="font-Roboto">
         <ScreenPoints
         picture={Promotion}
         promotion={"A cada 5 almoços, ganhe um Snickers!"}
         points={"3/6 Pontos"}
         restaurantName={"Restaurante Sabor Mineiro"}/>
        </div>
      </div>
    </div>
  );
};

export default userPagePoints;

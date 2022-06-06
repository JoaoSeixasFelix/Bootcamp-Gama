import NavBar from "../components/ComponentsGenerics/NavBar";
import { ScreenPoints } from "../components/ComponentsGenerics/MenuList";
import Promotion from "../../public/RestaurantPictures/promotion-sneakers.svg";
import Modal from "../components/ComponentsGenerics/ModalQr";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const userPagePoints = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <div className="flex flex-col">
        <NavBar
          name={user?.name}
          activePoints="border-b-2"
          colorPoints="border-black"
        />
      </div>
      <div className="fixed left-0 bottom-0 z-20">
        <Modal />
      </div>
      <div className="font-Roboto w-screen overflow-auto h-4/5 mb-6 mt-4">
        <ScreenPoints
          picture={Promotion}
          promotion={"A cada 5 almoços, ganhe um Snickers!"}
          points={"3/6 Pontos"}
          restaurantName={"Restaurante Sabor Mineiro"}
        />
      </div>
    </div>
  );
};

export default userPagePoints;

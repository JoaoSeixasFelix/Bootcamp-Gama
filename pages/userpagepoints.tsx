import NavBar from "../components/NavBar";
import RestaurantDescription from "../components/MaterialUI/MenuList";
import Feijao from "../public/PadariaeRestauranteDiamantina.svg";
import BencaBecoi from "../public/BençaBençoi.svg";
import Nine from "../public/RestauranteNine.svg";
import FavIcon from "../public/FavIcon.svg";
import Modal from "../components/MaterialUI/ModalQr";
import Disclousure from "../components/MaterialUI/Disclosure";

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
      <div className="fixed right-0 bottom-0 z-20">
        <Modal />
      </div>
      <div className="w-screen overflow-auto h-3/4 mb-6 mt-3">
        <div className="font-Roboto">
          <div>
            <RestaurantDescription
              picture={Feijao}
              promotion={"A cada 5 almoços, ganhe um Snickers!"}
              points={"3/6 Pontos"}
              restaurantName={"Restaurante Sabor Mineiro"}
            />
          </div>
          <RestaurantDescription
            picture={BencaBecoi}
            restaurantName={"Nine"}
            points={"5 Pontos"}
            promotion={"Vencimento: 15/06/2022"}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            points={"20 Pontos"}
            promotion={"Vencimento: 30/06/2022"}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            points={"Prato Executivo"}
            promotion={"Centro"}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            points={"Prato Executivo"}
            promotion={"Centro"}
          />
        </div>
      </div>
    </div>
  );
};

export default userPagePoints;

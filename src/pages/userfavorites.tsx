import NavBar from "../components/NavBar";
import RestaurantDescription from "../components/ComponentsGenerics/MenuList";
import Feijao from "../../public/RestaurantPictures/PadariaeRestauranteDiamantina.svg";
import BencaBecoi from "../../public/RestaurantPictures/BençaBençoi.svg";
import Nine from "../../public/RestaurantPictures/RestauranteNine.svg";
import FavIcon from "../../public/Icons/FavIcon.svg";
import Modal from "../components/ComponentsGenerics/ModalQr";

const userFavorites = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center mb-5">
      <div className="flex flex-col">
        <NavBar
          name="Joao Felix"
          activeFav="border-b-2"
          colorFav="border-black"
        />
      </div>
      <div className="fixed left-0 bottom-0 z-20">
        <Modal />
      </div>
      <div className="flex flex-col overflow-y-scroll mb-6 mt-3 w-screen h-4/5">
        <div className="">
          <RestaurantDescription
            picture={Feijao}
            restaurantName={"Restaurante Dona Ana"}
            contact={"(31) 3333-3333"}
            localization={"Rua Rio de Janeiro, 222"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={BencaBecoi}
            restaurantName={"Bença Bençoi"}
            contact={"(31) 3333-3333"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            contact={"(31) 3333-3333"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default userFavorites;

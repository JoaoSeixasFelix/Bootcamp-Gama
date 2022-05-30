import NavBar from "../components/NavBar";
import RestaurantDescription from "../components/MenuList";
import Feijao from "../public/PadariaeRestauranteDiamantina.svg";
import BencaBecoi from "../public/BençaBençoi.svg";
import Nine from "../public/RestauranteNine.svg";
import FavIcon from "../public/FavIcon.svg";
import Modal from "../components/ModalQr";

const userFavorites = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center mb-5">
      <div className="flex flex-col h-1/4">
        <NavBar
          name="Joao Felix"
          activeFav="border-b-2"
          colorFav="border-black"
        />
      </div>
      <div className="fixed right-0 bottom-0 z-20">
        <Modal />
      </div>
      <div className="flex flex-col overflow-y-scroll mb-6 mt-3 w-screen h-3/4">
        <div className="">
          <RestaurantDescription
            picture={Feijao}
            restaurantName={"Feijâo"}
            plateModel={"Self - Service"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={BencaBecoi}
            restaurantName={"Bença Bençoi"}
            plateModel={"Self - Service"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            plateModel={"Prato Executivo"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            plateModel={"Prato Executivo"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            plateModel={"Prato Executivo"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default userFavorites;

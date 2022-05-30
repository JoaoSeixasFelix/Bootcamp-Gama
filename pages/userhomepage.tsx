import NavBar from "../components/NavBar";
import RestaurantDescription from "../components/MenuList";
import Feijao from "../public/Padaria e RestauranteDiamantina.svg";
import BencaBecoi from "../public/BençaBençoi.svg";
import Nine from "../public/RestauranteNine.svg";
import FavIcon from "../public/FavIcon.svg";
import Modal from "../components/ModalQr";

const userHomePage = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center mb-5">
      <div className="flex h-1/5 flex-col">
        <NavBar
          name="Joao Felix"
          activeHome="border-b-2"
          colorHome="border-black"
        />

        <div className="fixed right-0 bottom-0 z-20">
          <Modal />
        </div>
      </div>

      <div className="flex flex-col overflow-y-scroll mb-6 w-screen h-4/5">
        <span className=" mt-3 ml-9 font-Poppins">Restaurantes</span>
        <div className="mt-2">
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

export default userHomePage;

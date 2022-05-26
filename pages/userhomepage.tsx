import NavBar from "../components/NavBar";
import RestaurantDescription from '../components/MenuList'
import Feijao from "../public/Padaria e RestauranteDiamantina.svg"
import BencaBecoi from "../public/BençaBençoi.svg"
import Nine from "../public/RestauranteNine.svg"
import FavIcon from "../public/FavIcon.svg"
import Modal from "../components/ModalQr";


const userHomePage = () => {
  return (
    <div className="relative
                    flex
                    flex-col
                    w-screen
                    items-center
                    justify-center mb-5">


        <div className="flex
                        flex-col
                        fixed top-0 left-0 right-0 z-10">

            <NavBar 
              name= "Joao Felix" 
              activeHome="border-b-2" 
              colorHome="border-black"
            />

        </div>
        
        <div className="fixed right-0 bottom-0 z-20">
          <Modal/>
        </div>


        <div className="absolute
                        left-0 right-0 z-0 top-44 
                        h-full mb-6">

        
        <span className="ml-6 mb-4 font-Poppins">Restaurantes</span>

        <div className="mt-2 pb-5">

            <RestaurantDescription 
            picture={Feijao} 
            restaurantName={"Feijâo"} 
            plateModel={"Self - Service"} 
            localization={"Centro"}
            favIcon = {FavIcon}
            />

            <RestaurantDescription 
            picture={BencaBecoi} 
            restaurantName={"Bença Bençoi"} 
            plateModel={"Self - Service"} 
            localization={"Centro"}
            favIcon = {FavIcon}
            />

            <RestaurantDescription 
            picture={Nine} 
            restaurantName={"Nine"} 
            plateModel={"Prato Executivo"} 
            localization={"Centro"}
            favIcon = {FavIcon}
            />

            <RestaurantDescription 
            picture={Nine} 
            restaurantName={"Nine"} 
            plateModel={"Prato Executivo"} 
            localization={"Centro"}
            favIcon = {FavIcon}
            />

            <RestaurantDescription 
            picture={Nine} 
            restaurantName={"Nine"} 
            plateModel={"Prato Executivo"} 
            localization={"Centro"}
            favIcon = {FavIcon}
            />

        </div>

      </div>

    </div>

  );
};

export default userHomePage;
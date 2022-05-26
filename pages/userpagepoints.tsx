import NavBar from "../components/NavBar";
import RestaurantDescription from '../components/MenuList'
import Feijao from "../public/Padaria e RestauranteDiamantina.svg"
import BencaBecoi from "../public/BençaBençoi.svg"
import Nine from "../public/RestauranteNine.svg"
import FavIcon from "../public/FavIcon.svg"
import Modal from "../components/ModalQr";


const userPagePoints = () => {
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
              activePoints="border-b-2" 
              colorPoints="border-black"
            />

        <div className="fixed right-0 bottom-0 z-20">
          <Modal/>
        </div>


        </div>
        

        <div className="absolute
                        left-0 right-0 z-0 top-44 
                        h-full mb-6">

        <div className="mt-2 pb-5 font-Roboto">

            <RestaurantDescription 
            picture={Feijao} 
            restaurantName={"Feijâo"} 
            points={"10 Pontos"}
            validate={"Vencimento: 10/06/2022"}
            favIcon={FavIcon}
            />

            <RestaurantDescription 
            picture={BencaBecoi} 
            restaurantName={"Nine"} 
            points={"5 Pontos"} 
            validate={"Vencimento: 15/06/2022"}
            favIcon={FavIcon}
            />

            <RestaurantDescription 
            picture={Nine} 
            restaurantName={"Nine"} 
            points={"20 Pontos"} 
            validate={"Vencimento: 30/06/2022"}
            favIcon={FavIcon}
            />

            <RestaurantDescription 
            picture={Nine} 
            restaurantName={"Nine"} 
            points={"Prato Executivo"} 
            validate={"Centro"}
            favIcon={FavIcon}
            />

            <RestaurantDescription 
            picture={Nine} 
            restaurantName={"Nine"} 
            points={"Prato Executivo"} 
            validate={"Centro"}
            favIcon={FavIcon}
            />

        </div>

      </div>

    </div>

  );
};

export default userPagePoints;
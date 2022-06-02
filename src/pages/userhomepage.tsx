import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RestaurantDescription from "../components/ComponentsGenerics/MenuList";
import Feijao from "../../public/RestaurantPictures/PadariaeRestauranteDiamantina.svg";
import HamburgueriaAlfandega from '../../public/RestaurantPictures/HamburgueriaAlfandega.svg'
import RestaurantDonaAna from '../../public/RestaurantPictures/RestaurantDonaAna.svg'
import BencaBecoi from "../../public/RestaurantPictures/BençaBençoi.svg";
import RestaurantNine from "../../public/RestaurantPictures/RestaurantNine.svg";
import FavIcon from "../../public/Icons/FavIcon.svg";
import Modal from "../components/ComponentsGenerics/ModalQr";
import { api } from "../../services/api";

const userHomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("people/10").then(({data}) => {
      setUsers(data.name);
    });
    console.log(users);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center mb-5">
      <div className="flex flex-col">
        <NavBar name={users} activeHome="border-b-2" colorHome="border-black" />

        <div className="fixed left-0 bottom-0 z-20">
          <Modal />
        </div>
      </div>

      <div className="flex flex-col overflow-y-scroll mb-6 w-screen h-4/5">
        <div className="mt-2">
          <RestaurantDescription
            picture={RestaurantDonaAna}
            restaurantName={"Restaurante Dona Ana"}
            contact={"(31) 3333-3333"}
            localization={"Rua Rio de Janeiro, 222"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={HamburgueriaAlfandega}
            restaurantName={"Hamburgueria Alfândega"}
            contact={"(31) 5555-5555"}
            localization={"Rua Aimorés, 77"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={RestaurantNine}
            restaurantName={"Restaurante Sabor Saudável"}
            contact={"(31) 4444-4444"}
            localization={"Rua da Bahia, 49"}
            favIcon={FavIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default userHomePage;

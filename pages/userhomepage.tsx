import NavBar from "../components/NavBar";
import RestaurantDescription from "../components/MaterialUI/MenuList";
import Feijao from "../public/PadariaeRestauranteDiamantina.svg";
import BencaBecoi from "../public/BençaBençoi.svg";
import Nine from "../public/RestauranteNine.svg";
import FavIcon from "../public/FavIcon.svg";
import Modal from "../components/MaterialUI/ModalQr";
import { api } from "../services/api";
import React, { useEffect, useState } from "react";

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
      <div className="flex h-1/4 flex-col">
        <NavBar name={users} activeHome="border-b-2" colorHome="border-black" />

        <div className="fixed left-0 bottom-0 z-20">
          <Modal />
        </div>
      </div>

      <div className="flex flex-col overflow-y-scroll mb-6 w-screen h-3/4">
        <div className="mt-2">
          <RestaurantDescription
            picture={Feijao}
            restaurantName={"Feijâo"}
            contact={"Self - Service"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={BencaBecoi}
            restaurantName={"Bença Bençoi"}
            contact={"Self - Service"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            contact={"Prato Executivo"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            contact={"Prato Executivo"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
          <RestaurantDescription
            picture={Nine}
            restaurantName={"Nine"}
            contact={"Prato Executivo"}
            localization={"Centro"}
            favIcon={FavIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default userHomePage;

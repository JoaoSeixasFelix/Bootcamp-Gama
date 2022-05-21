import "./FavoritesDishCatalog.css";

export default function FavDishCatalog() {
  return (
    <div className="fav-restaurants-components">

      <div>
        <div className="fav-restaurante">
          <img
            src="./src/components/Pictures/MenuUser/main_shutterstock_1487233544 2.png"
            alt="picture-dish"
            style={{ marginLeft: "16px" }}
            width={"360px"}
          />
          
        </div>

        <div className="fav-desctiption-iten-1">
          <div className="fav-menu-description">
            <div className="fav-dish-description">
              <p className="fav-restaurant"> Feijão</p>
              <p className="fav-kind-of-service"> Self - Service </p>
              <p> Centro </p>
            </div>
          </div>

          <div>
            <img
              src="./src/components/Pictures/Like.svg"
              alt="icon-like"
              style={{
                marginRight: "30px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            />
          </div>
          
        </div>
         <div className="restaurante-description">
            <img
                src="./src/components/Pictures/MenuUser/Rectangle 1252.png"
                alt="picture-dish"
                style={{ marginLeft: "16px" }}
                width={"360px"}
            />
        </div>

        <div className="fav-desctiption-iten-2">
          <div className="fav-menu-description">
            <div className="fav-dish-description">
              <p className="fav-restaurant"> Bença Bençoi </p>
              <p className="fav-kind-of-service"> Self - Service </p>
              <p> Centro </p>
            </div>
          </div>

          <div>
            <img
              src="./src/components/Pictures/Like.svg"
              alt="icon-like"
              style={{
                marginRight: "30px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            />
          </div>
        </div>

        <div className="restaurante-description">
          <img
            src="./src/components/Pictures/MenuUser/Rectangle 1251.png"
            alt="picture-dish"
            style={{ marginLeft: "16px" }}
            width={"360px"}
          />
        </div>

        <div className="fav-desctiption-iten-3">
          <div className="fav-menu-description">
            <div className="fav-dish-description">
              <p className="-fav-restaurant"> Restaurante Nine</p>
              <p className="fav-kind-of-service"> Self - Service </p>
              <p className="fav-location" > Centro </p>
            </div>

            <img
              src="./src/components/Pictures/Like.svg"
              alt="icon-like"
              style={{
                marginRight: "30px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            />
          </div>

        </div>
        
      </div>

    </div>
  );
}

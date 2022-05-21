import "./DishCatalog.css";

export default function DishCatalog() {
  return (
    <div className="restaurants-components">
      <p className="restaurant-title">Restaurantes</p>

      <div>
        <div className="restaurante-description">
          <img
            src="./src/components/Pictures/MenuUser/main_shutterstock_1487233544 2.png"
            alt="picture-dish"
            style={{ marginLeft: "16px" }}
            width={"360px"}
          />
        </div>

        <div className="desctiption-iten">
          <div className="menu-description">
            <div className="dish-description">
              <p className="restaurant"> Feijão</p>
              <p className="kind-of-service"> Self - Service </p>
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

        <div className="desctiption-iten">
          <div className="menu-description">
            <div className="dish-description">
              <p className="restaurant"> Bença Bençoi </p>
              <p className="kind-of-service"> Self - Service </p>
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

        <div className="desctiption-iten-3">
          <div className="menu-description">
            <div className="dish-description">
              <p className="restaurant"> Restaurante Nine</p>
              <p className="kind-of-service"> Self - Service </p>
              <p className="location" > Centro </p>
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

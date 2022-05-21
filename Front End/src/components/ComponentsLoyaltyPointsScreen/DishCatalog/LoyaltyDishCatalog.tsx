import "./LoyaltyDishCatalog.css";

export default function LoyaltyDishCatalog() {
  return (
    <div className="loyalty-restaurants-components">

      <div>
        <div className="loyalty-restaurante">
          <img
            src="./src/components/Pictures/MenuUser/main_shutterstock_1487233544 2.png"
            alt="picture-dish"
            style={{ marginLeft: "16px" }}
            width={"360px"}
          />
          
        </div>

        <div className="loyalty-desctiption-iten-1">
          <div className="loyalty-menu-description">
            <div className="loyalty-dish-description">
              <p className="loyalty-restaurant"> Padaria e Restaurante Diamantina</p>
              <p className="loyalty-type-of-service-score"> 10 Pontos </p>
              <p> Vencimento: 10/06/2022 </p>
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
         <div className="loyalty-restaurante-description">
            <img
                src="./src/components/Pictures/MenuUser/Rectangle 1252.png"
                alt="picture-dish"
                style={{ marginLeft: "16px" }}
                width={"360px"}
            />
        </div>

        <div className="loyalty-desctiption-iten-2">
          <div className="loyalty-menu-description">
            <div className="loyalty-dish-description">
              <p className="loyalty-restaurant"> Restaurante Nine </p>
              <p className="loyalty-type-of-service-score"> 5 Pontos </p>
              <p> Vencimento: 15/06/2022 </p>
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

        <div className="loyalty-restaurante-description">
          <img
            src="./src/components/Pictures/MenuUser/Rectangle 1251.png"
            alt="picture-dish"
            style={{ marginLeft: "16px" }}
            width={"360px"}
          />
        </div>

        <div className="loyalty-desctiption-iten-3">
          <div className="loyalty-menu-description">
            <div className="loyalty-dish-description">
              <p className="-loyalty-restaurant"> Restaurante Nine</p>
              <p className="loyalty-type-of-service-score"> Self - Service </p>
              <p className="loyalty-location" > Centro </p>
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

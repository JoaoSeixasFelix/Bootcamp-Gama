import "./AdressAndContact.css";

export default function AdressAndContact() {
  return (

    <div className="adress-and-contact">
        <div className="img-text">
          <img
            src="./src/components/Pictures/location_on.svg"
            alt="location"
            width={"9px"}
            height={"15px"}
            style={{ paddingBottom: "2px" }}
            className="picture1"
          />
          <p className="adress">Rua da Bahia, 1000</p>
        </div>

        <div className="img-text">
          <img
            src="./src/components/Pictures/call.svg"
            alt="location"
            width={"9px"}
            height={"15px"}
            style={{ paddingBottom: "2px" }}
            className="picture1"
          ></img>
          <p className="contact">(31) 3333-3333</p>
        </div>
    </div>
  );
}

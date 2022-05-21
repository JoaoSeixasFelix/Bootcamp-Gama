import "./FavHeaderUserName.css";

export default function FavHeaderUserName() {
  return (
    <div className="fav-user-screen-qrcode-description">
      <img
        src="./src/components/Pictures/apple.svg"
        width={"24px"}
        height={"24px"}
        style={{ marginLeft: "20px", backgroundColor: "black" }}
      />
      <p className="fav-user-name-qrcode-description">Leandro N.</p>
    </div>
  );
}

import "./HeaderUserName.css";

export default function HeaderUserName() {
  return (
    <div className="user-screen-qrcode-description">
      <img
        src="./src/components/Pictures/apple.svg"
        width={"24px"}
        height={"24px"}
        style={{ marginLeft: "20px", backgroundColor: "black" }}
      />
      <p className="user-name-qrcode-description">Leandro N.</p>
    </div>
  );
}

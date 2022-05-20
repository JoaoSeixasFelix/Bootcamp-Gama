import "./HeaderUserName.css";

export default function HeaderUserName() {
  return (
    <div className="user-home-description">
      <img
        src="./src/components/Pictures/apple.svg"
        width={"24px"}
        height={"24px"}
        style={{ marginLeft: "33px",marginBottom: "40px", backgroundColor: "black" }}
      />
      <p className="user-name-qrcode">Leandro N.</p>
    </div>
  );
}

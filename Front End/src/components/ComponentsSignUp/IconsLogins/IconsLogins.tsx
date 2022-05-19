import "./InconsLogins.css";

export default function IconsSignUp() {
  return (
    <>
      <div className="others-logins">
        <img
          src="./src/components/Pictures/IconsSingIn/Line_117.svg"
          alt="Line"
        />
        <p>Cadastre-se com:</p>
        <img
          src="src/components/Pictures/IconsSingIn/Line_117.svg"
          alt="Line"
        />
      </div>

      <div className="icons-login">
        <img
          src="./src/components/Pictures/IconsSingIn/google-contained-fill.svg"
          style={{ marginLeft: "40px", cursor: "pointer" }}
        />
        <img
          src="./src/components/Pictures/IconsSingIn/facebook-fill.svg"
          style={{ cursor: "pointer" }}
        />
        <img
          src="./src/components/Pictures/IconsSingIn/apple.svg"
          style={{ marginRight: "40px", cursor: "pointer" }}
        />
      </div>
    </>
  );
}

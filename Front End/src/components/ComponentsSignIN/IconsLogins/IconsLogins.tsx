import "./InconsLogins.css";

export default function IconsLogin() {
  return (
    <>
      <div className="others-logins">
        <img
          src="./src/components/Pictures/IconsSingIn/Line_117.svg"
          alt="Line"
          
        />
        <p>Continuar com:</p>
        <img
          src="src/components/Pictures/IconsSingIn/Line_117.svg"
          alt="Line"
        />
      </div>

      <div className="icons-login">
        <img
          src="./src/components/Pictures/IconsSingIn/google-contained-fill.svg"
          style={{ marginLeft: "40px" }}
        />
        <img src="./src/components/Pictures/IconsSingIn/facebook-fill.svg" />
        <img
          src="./src/components/Pictures/IconsSingIn/apple.svg"
          style={{ marginRight: "40px" }}
        />
      </div>
    </>
  );
}

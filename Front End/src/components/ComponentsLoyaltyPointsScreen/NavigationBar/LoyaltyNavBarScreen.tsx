import "./LoyaltyNavBarScreen.css";

export default function LoyaltyNavBar() {
  return (
    <div className="score-navbar-icons-users">
      <nav className="score-navbar-icons-users-home">
        <img
          src="./src/components/Pictures/IconsNavBar/bxs_home-circle.svg"
          style={{marginLeft: "40px", cursor: "pointer" }}
        />
        <img
          src="./src/components/Pictures/IconsNavBar/Favorite.svg"
          style={{ cursor: "pointer" }}
        />
        <img
          src="./src/components/Pictures/IconsNavBar/Frame 2814.svg"
          style={{ marginRight: "40px", cursor: "pointer" }}
        />
      </nav>
    </div>
  );
}

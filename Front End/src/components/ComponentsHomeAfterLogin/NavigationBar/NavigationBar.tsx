import './NavigationBar.css'


export default function NavBarApp() {
  return (
    <>
    <img src="'./src/components/Pictures/IconsNavBar/Line 110.svg'" alt="" />
      <div className="navbar-icons-home">
        <img
          src="./src/components/Pictures/IconsNavBar/bxs_home-circle.svg"
          style={{ marginLeft: "40px", cursor: "pointer" }}
        />
        <img
          src="./src/components/Pictures/IconsNavBar/Favorite.svg"
          style={{ cursor: "pointer" }}
        />
        <img
          src="./src/components/Pictures/IconsNavBar/Frame 2814.svg"
          style={{ marginRight: "40px", cursor: "pointer" }}
        />
      </div>
    </>
  );
}

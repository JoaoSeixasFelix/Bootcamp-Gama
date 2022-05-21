import LocalDescription from "../ComponentsUserScreen/DescriptionEvent/DescriptionEvent";
import DishCatalog from "../ComponentsUserScreen/DishCatalog/DishCatalog";
import HeaderUserName from "../ComponentsUserScreen/HeaderUserName/UserNameHome";
import NavBarUserHome from "../ComponentsUserScreen/NavigationBar/NavBarUserScreen";


export default function homeRestaurants(){
    return(
        <div className="user-screen-restaurant">
        <HeaderUserName/>
        <LocalDescription/>
        <DishCatalog/>
        <NavBarUserHome/>
        </div>
    )
}
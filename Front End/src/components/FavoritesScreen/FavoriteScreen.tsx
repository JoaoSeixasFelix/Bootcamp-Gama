import FavDescription from "../ComponentsFavoritesScreen/DescriptionEvent/FavDescriptionEvent";
import FavDishCatalog from "../ComponentsFavoritesScreen/DishCatalog/FavoritesDishCatalog";
import FavHeaderUserName from "../ComponentsFavoritesScreen/HeaderUserName/FavUserNameHome";
import FavNavBarUserHome from "../ComponentsFavoritesScreen/NavigationBar/NavBarUserScreen";

export default function FavoritesScreen() {
  return (
    <div>
      <FavHeaderUserName/>
      <FavDescription />
      <FavDishCatalog />
      <FavNavBarUserHome/>
    </div>
  );
}

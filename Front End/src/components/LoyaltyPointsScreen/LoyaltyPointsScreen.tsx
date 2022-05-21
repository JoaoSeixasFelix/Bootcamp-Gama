import LoyaltyDescription from "../ComponentsLoyaltyPointsScreen/DescriptionEvent/LoyaltyDescriptionEvent";
import LoyaltyDishCatalog from "../ComponentsLoyaltyPointsScreen/DishCatalog/LoyaltyDishCatalog";
import LoyaltyHeaderUserName from "../ComponentsLoyaltyPointsScreen/HeaderUserName/LoyaltyUserName";
import LoyaltyNavBar from "../ComponentsLoyaltyPointsScreen/NavigationBar/LoyaltyNavBarScreen";

export default function LoyaltyScoreScreen() {
  return (
    <div>
      <LoyaltyHeaderUserName />
      <LoyaltyDescription />
      <LoyaltyDishCatalog />
      <LoyaltyNavBar/>
    </div>
  );
}

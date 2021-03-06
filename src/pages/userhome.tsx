import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import HomePage from "./home";
import UserHomePage from "./userhomepage";

const userHome = () => {
  const { user } = useContext(AuthContext);

  return <>{user?.type === 1 ? <HomePage /> : <UserHomePage />}</>;
};

export default userHome;

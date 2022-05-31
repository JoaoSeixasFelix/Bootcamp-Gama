import { useState } from "react";
import Disclousure from "../components/MaterialUI/Disclosure";
import { Selection } from "../components/MaterialUI/Input";

const Home = () => {
  const [signUpTypeClient, setSignUpTypeClient] = useState("");
  const onChangeSelection = (typeCLient: string) => {
    console.log(signUpTypeClient);
    setSignUpTypeClient(typeCLient);
  };
  
  return (
    <div>
 <Disclousure/>
    </div>
  );
};

export default Home;

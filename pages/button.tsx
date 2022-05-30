import { useState } from "react";
import { Selection } from "../components/Input";

const Home = () => {
  const [signUpTypeClient, setSignUpTypeClient] = useState("");
  const onChangeSelection = (typeCLient: string) => {
    console.log(signUpTypeClient);
    setSignUpTypeClient(typeCLient);
  };
  
  return (
    <div>
 <Selection
          onValueChange={onChangeSelection}
          name="typeOfClient"
          placeholderSelection="Tipo de Cliente"
          value={signUpTypeClient}
          borderColor="border-green-300"
          width="w-80"
          bgColor="white"
          textColor="white"
          marginBottom="mb-7"/>
     
    </div>
  );
};

export default Home;

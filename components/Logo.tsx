import Image from "next/image";
import logo from "../public/vector.svg";

export default function Logo() {
  return (
    <div className="md:390px flex w-3/6 mr-32 mb-12">
      <Image
        src={logo}
        alt= "Picture Logo of Fig+"
        width={"140px"}
        height={"140px"}
      />
    </div>
  );
}

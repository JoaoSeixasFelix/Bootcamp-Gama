import Image from "next/image";
import logo from "../public/vector.svg";

export default function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src={logo}
        alt= "Picture Logo of Fig+"
        width={"140px"}
        height={"140px"}
      />
    </div>
  );
}

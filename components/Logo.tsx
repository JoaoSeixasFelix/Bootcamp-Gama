import Image from "next/image";
import logo from "../public/vector.svg";

export default function Logo() {
  return (
    <div className="flex justify-center mt-4 -mb-7">
      <Image
        src={logo}
        alt= "Picture Logo of Fig+"
        width={"140px"}
        height={"140px"}
        className={"items-center justify-center"}
      />
    </div>
  );
}

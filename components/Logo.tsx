import Image from "next/image";
import logo from "../public/vector.svg";

export default function Logo() {
  return (
    <div className="md:390px flex h-1/6 w-3/6 mr-32 mb-12">
      <Image
        src={logo}
        alt= "Picture Logo of Fig+"
      />
    </div>
  );
}

import Image from "next/image";
import Pictureline from "../public/Line 116.svg";
import Google from "../public/google.svg";
import Apple from "../public/apple.svg";
import Facebook from "../public/apple.svg";

export default function SocialMediaLogin() {

  return (

    <div className="flex flex-col items-center">

      <div className="flex justify-between w-screen mb-5">

        <Image src={Pictureline} />
        <p> Login com </p>
        <Image src={Pictureline} />

      </div>

      <div className=" inline-block">

        <span className=" mr-10">
          <Image src={Google} style={{ cursor: "pointer" }} />
        </span>

        <span>
          <Image src={Apple} style={{ cursor: "pointer" }} />
        </span>

        <span className=" ml-10">
          <Image src={Facebook} style={{ cursor: "pointer" }} />
        </span>

      </div>
      
    </div>
  );
}

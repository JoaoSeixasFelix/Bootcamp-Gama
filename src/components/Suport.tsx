import Description from "./Description";
import Whatsapp from "../../public/Icons/whatsapp.svg";
import Email from "../../public/Icons/email.svg";
import open from "../../public/Icons/open_in_new.svg";
import Image from "next/image";

export const HelpDesk = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full mt-9 ml-5">
        <div className="flex flex-col h-36 w-4/5 ml-5 justify-center">
          <div className="flex h-3/4 items-center font-Poppins text-5xl">
            <Description myprograms={"Suporte"} />
          </div>
          <div className="flex flow h-1/4 text-lg mt-3 mb-3 items-end">
            <Description
              salutation={
                "Ficou com alguma dúvida? Entre em conatato com nosso suporte!"
              }
            />
          </div>
        </div>
        <div className="flex h-3/4 w-full items-center mt-16">
          <div className=" flex flex-col ml-4 mr-10 border-2 justify-center w-96 h-96 rounded-xl shadow-lg shadow-gray-500 bg-white items-center">
            <div className="flex flex-col items-start h-full">
              <div className="flex items-center w-full h-1/5 ">
                <h1 className="mr-52 font-Poppins text-2xl ">WhatsApp</h1>
                <Image src={open} style={{cursor: "pointer"}}/>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-4/5 cursor-pointer">
                <Image src={Whatsapp} style={{cursor: "pointer"}} />
                <h1 className="mt-16">(31) 99999-99999</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center border-2  w-96 h-96 rounded-xl shadow-lg shadow-gray-500 bg-white i">
          <div className="flex flex-col items-start h-full">
              <div className="flex items-center w-full h-1/5">
                <h1 className="mr-60 font-Poppins text-2xl">E-mail</h1>
                <Image src={open} style={{cursor: "pointer"}} />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-4/5">
                <Image src={Email} style={{cursor: "pointer"}}/>
                <h1 className="mt-16">fidmais@suporte.com.br</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;

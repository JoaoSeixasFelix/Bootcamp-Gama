import Image from "next/image";
import HomeLadingPage from "../../public/LadingPage/HomePage.png";
import MobilePrototipo from "../../public/LadingPage/5.png";
import NavBarLading from "../components/ComponentsGenerics/NavBarLading";
import Footer from "../components/ComponentsGenerics/FooterLading";

const LadingPage = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="">
        <NavBarLading />
      </div>

      <div className="h-screen">
        <div className="h-9.7 overflow-y-auto flex flex-col justify-start">
          <div>
            <Image src={HomeLadingPage} width={3000} />
          </div>
          <div className="grid sm:grid-cols-2 justify-center items-center mt-6 mx-8">
            <Image src={MobilePrototipo} className="rounded-3xl" />
            <p className="font-Poppins text-left xs:text-sm sm:text-xl mx-4 mt-5 mb-5">
              Fid+ Conecte e Fidelize. É o programa de Gestão de Fidelidade
              Digital para os restaurantes que os restaurantes criem e gerenciem
              seus programas de fidelidade, e tenham um melhor controle de seus
              usuarios.
            </p>
          </div>
          <div className="flex items-start">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadingPage;

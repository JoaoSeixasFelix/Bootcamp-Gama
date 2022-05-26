import Image from "next/image";
import Modal from "../components/ModalQr";
import NavBar from "../components/NavBar";
import QrCodeScreen from "../components/QrCodeScreen";
import QrIcon from "../public/qrcode.svg"


const Home = () => {
  return (
    <div>
        <NavBar/>
        <QrCodeScreen />
        <Modal />
    </div>
  );
};

export default Home;

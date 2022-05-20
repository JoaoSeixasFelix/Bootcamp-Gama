import NavBorder from "../ComponentsQr/Border/BorderBottom";
import DescriptionEvent from "../ComponentsQr/DescriptionEvent/DescriptionEvent";
import HeaderUserName from "../ComponentsQr/HeaderUserName/QrCodeScreenUserName";
import LayoutQrCode from "../ComponentsQr/LayoutQrCode/LayoutQrCode";
import NavBarQrCode from "../ComponentsQr/NavigationBar/NavBarQrCode";
import "./ScreenQrCode.css";

export default function ScreenQrCode() {
  return (
    <div className="screen-qr-code">
      <HeaderUserName />
      <DescriptionEvent />
      <LayoutQrCode />
      <NavBarQrCode />
    </div>
  );
}

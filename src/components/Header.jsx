import Logo from "../images/logo.svg";
import menubar from "../images/menubar.svg";
import header from "../images/header.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="img" />
        </div>
        <div className="nav">
          <ul>
            <li id="selected">General</li>
            <li>Sales</li>
            <li>Negotiation</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div>
          <img src={menubar} alt="menu" />
        </div>
      </div>
        <img src={header} alt="img2" className="rel"/>
    </div>
  );
};

export default Header;

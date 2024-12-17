import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img src='/images/logo.svg' alt="img" />
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
          <img src='/images/menubar.svg' alt="menu" />
        </div>
      </div>
        <img src='/images/header.svg' alt="img2" className="rel"/>
    </div>
  );
};

export default Header;

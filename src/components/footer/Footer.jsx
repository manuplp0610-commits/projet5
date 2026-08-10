import "./Footer.scss";
import logo from "../../assets/images/logo-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt="Logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

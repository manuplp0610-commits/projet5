import { NavLink } from "react-router-dom";
import "../header/header.scss";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Logo Kasa" />
      <nav className="header-nav">
        <NavLink to="/" className="header__nav-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__nav-link">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

import "./noFound.scss";
import { Link } from "react-router-dom";

export default function NoFound() {
  return (
    <div className="noFound">
      <h1 className="noFound-title">404</h1>
      <p className="noFound-subTitle">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/"} className="noFound-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

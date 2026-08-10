import { Link } from "react-router-dom";

import "./card.scss";

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img className="card-image" src={cover} alt={title} />
      <p className="card-title">{title}</p>
    </Link>
  );
}

export default Card;

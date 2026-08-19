import { useParams } from "react-router-dom";
import Slideshow from "../../components/slideshow/Slideshow";
import data from "../../data/data.json";
import Collapse from "../../components/collapse/Collapse";
import "./logement.scss";

export default function Logement() {
  const { id } = useParams();

  const logement = data.find((item) => item.id == id);
  const pictures = logement.pictures;

  return (
    <div className="logement">
      <Slideshow pictures={pictures} />
      <div className="logement-container">
        <div className="logement-container-A">
          <p className="logement-container-A-title">{logement.title}</p>
          <p className="logement-container-A-location">{logement.location}</p>
          {logement.tags.map((item) => {
            return (
              <span className="logement-container-A-tags" key={item}>
                {item}
              </span>
            );
          })}
        </div>
        <div className="logement-container-B">
          <div className="logement-container-B-info">
            <p className="logement-container-B-info-name">
              {logement.host.name}
            </p>
            <div className="logement-container-B-info-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`logement-container-B-info-rating-star ${
                    index < logement.rating ? "filled" : ""
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="logement-img-profil">
            <img
              className="logement-img-profil"
              src={logement.host.picture}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse
          className="logement-collapses-collapse"
          title="Description"
          description={logement.description}
        />
        <Collapse
          className="logement-collapses-collapse"
          title="Équipements"
          description={logement.equipments}
        />
      </div>
    </div>
  );
}

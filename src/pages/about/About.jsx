import "./about.scss";
import image from "../../assets/images/banner-about.jpg";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";

export default function About() {
  return (
    <div className="about">
      <Banner image={image} />
      <div className="collapse-container">
        <Collapse
          description={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
          title="Fiabilité"
        />
        <Collapse
          description={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre pateforme."
          }
          title="Respect"
        />
        <Collapse
          description={
            "La qualité de service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          }
          title="Service"
        />
        <Collapse
          description={
            "La sécurité est la priorité de Kasa, aussi bien pour nos hôtes que pour nos voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
          title="Sécurité"
        />
      </div>
    </div>
  );
}

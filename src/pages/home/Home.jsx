import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import image from "../../assets/images/banner-home.jpg";
import "./Home.scss";
import jsonData from "../../data/data.json";

function Home() {
  return (
    <div className="home">
      <Banner image={image} title="Chez vous, partout et ailleurs" />
      <div className="home-items">
        {jsonData.map((item) => {
          return (
            <Card
              className="home-item"
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;

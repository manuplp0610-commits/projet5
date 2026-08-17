import { useState } from "react";
import "../../components/slideshow/slideshow.scss";
import data from "../../data/data.json";

export default function Slideshow({ id }) {
  const [image, setImage] = useState(0);
  const test = data.find((item) => item.id == id);
  console.log(test);

  console.log(id);
  const pictures = test.pictures;
  const imageWatch = pictures[image];

  const handelClickLeft = () => {
    if (image === 0) {
      return;
    }
    setImage(image - 1);
  };

  const handelClickRight = () => {
    if (image >= pictures.length - 1) {
      return;
    }
    setImage(image + 1);
  };

  return (
    <div className="carousel">
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={handelClickLeft}
      >
        ‹
      </button>

      <img className="carousel-img" src={imageWatch} alt="" />

      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={handelClickRight}
      >
        ›
      </button>
    </div>
  );
}

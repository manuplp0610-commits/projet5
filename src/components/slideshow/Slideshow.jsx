import { useState } from "react";
import "../../components/slideshow/slideshow.scss";

export default function Slideshow({ pictures }) {
  const [image, setImage] = useState(0);

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
      {image !== 0 && (
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={handelClickLeft}
        >
          ‹
        </button>
      )}

      <img className="carousel-img" src={imageWatch} alt="" />

      {image < pictures.length - 1 && (
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={handelClickRight}
        >
          ›
        </button>
      )}
    </div>
  );
}

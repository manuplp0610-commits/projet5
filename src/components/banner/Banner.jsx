import "./banner.scss";

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img className="banner-image" src={image} alt="" />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;

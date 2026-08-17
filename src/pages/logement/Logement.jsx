import { useParams } from "react-router-dom";
import Slideshow from "../../components/slideshow/Slideshow";

export default function Logement() {
  const { id } = useParams();

  return (
    <div>
      <Slideshow id={id} />
    </div>
  );
}

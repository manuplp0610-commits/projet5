import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import logement from "./pages/logement/Logement";
import about from "./pages/about/About";
import noFound from "./pages/noFound/noFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement" element={<logement />} />
      <Route path="/about" element={<about />} />
      <Route path="*" element={<noFound />} />
    </Routes>
  );
}

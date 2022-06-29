import { Route, Routes } from "react-router-dom";
import About from "../../About.js";
import Auctions from "../../Auctions.js";
import Experiences from "../../Experiences.js";
import Home from "../../Home.js";

const RouteComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </div>
  );
};

export default RouteComponent;

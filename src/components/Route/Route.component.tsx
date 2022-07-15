import { Route, Routes } from 'react-router-dom';
import About from '../../About';
import Auctions from '../../Auctions';
import Experiences from '../../Experiences';
import Home from '../../Home';
import Login from '../../Login';
import SellingForm from '../../SellingForm';

const RouteComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/sellingform" element={<SellingForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default RouteComponent;

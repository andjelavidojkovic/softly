import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../About';
import Auctions from '../../Auctions';
import Experiences from '../../Experiences';
import Home from '../../Home';
import Login from '../../pages/Login';
import SellingForm from '../../SellingForm';
import SignUp from '../../SignUp.page';
import MainWrapper from '../MainWrapper';

const RouteComponent = () => {
  const isLoggedIn = useMemo(() => localStorage.getItem('token'), []);

  if (!isLoggedIn)
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
  else
    return (
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/sellingform" element={<SellingForm />} />
        </Routes>
      </MainWrapper>
    );
};

export default RouteComponent;

import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../About';
import Auctions from '../../pages/Auctions/Auctions';
import Experiences from '../../Experiences';
import Home from '../../Home';
import Login from '../../pages/Login';
import SellingForm from '../../SellingForm';
import MainWrapper from '../MainWrapper';
import SignUp from '../../pages/SignUp';
import LoginContext from '../../providers/General/Login.context';

const RouteComponent = () => {
  const { isLogged } = useContext(LoginContext);

  if (!isLogged)
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  else
    return (
      <MainWrapper>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/sellingform" element={<SellingForm />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </MainWrapper>
    );
};

export default RouteComponent;

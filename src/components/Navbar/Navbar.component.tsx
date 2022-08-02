import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.style.scss';
import Logo from '../ImageComponents/Logo.icon';
import MenuBurger from '../ImageComponents/MenuBurger.icon';
import CustomLink from '../CustomLink/CustomLink.component';
import Dropdown from '../Dropdown/Dropdown.component';
import LoginContext from '../../providers/General/Login.context';
import Button from '../Button';

const options = [
  {
    to: '/about',
    value: 'About',
  },
  {
    to: '/auctions',
    value: 'Auctions',
  },
  {
    to: '/experiences',
    value: 'Experiences',
  },
];

const Navbar = () => {
  const { isLogged, logout } = useContext(LoginContext);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo height="64" width="90" />
      </div>
      <ul className="navbar__list">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/auctions">Auctions</CustomLink>
        <CustomLink to="/sellingform">Experiences</CustomLink>
      </ul>
      {isLogged ? (
        <div className="navbar__logout">
          <Button
            variant="tertiary"
            styleType="link"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="navbar__link--log">
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
      <div className="navbar__menu-burger">
        <Dropdown options={options}>
          <MenuBurger />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;

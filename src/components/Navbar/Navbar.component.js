import React from 'react';
import './Navbar.style.css';
import Logo from '../ImageComponents/Logo.icon';
import Button from '../Button';
import MenuBurger from '../ImageComponents/MenuBurger.icon';
import CustomLink from '../CustomLink/CustomLink.component';
import Dropdown from '../Dropdown/Dropdown.component';

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
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__list">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/auctions">Auctions</CustomLink>
        <CustomLink to="/experiences">Experiences</CustomLink>
      </ul>
      <div className="navbar__login-btn">
        <Button styleForButton="login">Login</Button>
      </div>
      <div className="navbar__menu-burger">
        <Dropdown options={options}>
          <MenuBurger />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;

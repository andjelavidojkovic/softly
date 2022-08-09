/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import CustomLink from '../CustomLink/CustomLink.component';
import './Sidebar.style.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__avatar">
        <img
          className="sidebar__avatar-picture"
          src="../../images/Ellipse 2.jpg"
          alt="profile picture"
        />
        <p className="sidebar__avatar-name">name name</p>
      </div>
      <nav className="sidebar__navlinks">
        <CustomLink to="wallet">Wallet</CustomLink>
        <CustomLink to="history">My History</CustomLink>
        <CustomLink to="currentbids">My Current Bids</CustomLink>
        <CustomLink to="accountsettings">Account settings</CustomLink>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import CustomLink from '../../components/CustomLink/CustomLink.component';
import './ProfileWallet.style.scss';

const ProfileWallet = () => {
  return (
    <div>
      <h3>Profile Wallet</h3>
      <nav>
        <CustomLink to="history">My History</CustomLink>
        <CustomLink to="currentbids">My Current Bids</CustomLink>
        <CustomLink to="accountsettings">My History</CustomLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProfileWallet;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './Profile.style.scss';

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Profile;

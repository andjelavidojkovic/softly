import React from 'react';
import Logo from './components/ImageComponents/Logo.icon';
import LoginForm from './components/LoginForm';
import './Login.style.scss';

const Login = () => {
  return (
    <div className="login">
      <Logo width="210" height="150" />
      <p> LOGIN </p>
      <LoginForm />
    </div>
  );
};

export default Login;

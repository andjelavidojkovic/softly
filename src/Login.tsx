import React, { useState } from 'react';
import Logo from './components/ImageComponents/Logo.icon';
import LoginForm from './components/LoginForm';
import './Login.style.scss';

const Login = () => {
  const users = [
    {
      email: 'djedje@g.com',
      password: 'djedje',
      register: false,
    },
    {
      email: 'nata@g.com',
      password: 'nata',
      register: false,
    },
    {
      email: 'joca@g.com',
      password: 'joca',
      register: false,
    },
    {
      email: 'caja@g.com',
      password: 'caja',
      register: false,
    },
  ];

  const [user, setUser] = useState({ email: '', password: '' });

  const Log = (details: any): void => {
    console.log(details);
    if (
      users.find(
        (user) =>
          details.email === user.email && details.password === user.password,
      )
    ) {
      console.log('Logged in');
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      console.log('Details do not match');
    }
  };

  const Logout = (): void => {
    setUser({ email: '', password: '' });
  };

  return (
    <div className="login">
      <Logo width="210" height="150" />
      <p> LOGIN </p>
      {user.email !== '' ? (
        <div>
          <h2>
            Welcome, <span>{user.email}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Log={Log} />
      )}
    </div>
  );
};

export default Login;

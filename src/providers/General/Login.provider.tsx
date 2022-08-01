import React, { useState } from 'react';
import LoginContext from './Login.context';

type LoginProviderProps = {
  children?: React.ReactNode;
};

const LoginProvider: React.FC<LoginProviderProps> = (props) => {
  const { children } = props;
  const [logged, setLogged] = useState<boolean>(false);
  const [values, setValues] = useState<Record<string, any>>({});

  const isLogged = () => {
    if (localStorage.getItem('token')) {
      setLogged(true);
    }
    setLogged(false);
  };

  return (
    <LoginContext.Provider value={{ values, logged, isLogged }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

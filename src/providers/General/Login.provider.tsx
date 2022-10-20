import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../models/User';
import LoginContext from './Login.context';

type LoginProviderProps = {
  children?: React.ReactNode;
};

const LoginProvider: React.FC<LoginProviderProps> = (props) => {
  const { children } = props;

  const navigate = useNavigate();

  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem('user')),
  );

  const isLogged = useMemo(
    () => user && !!localStorage.getItem('token'),
    [user],
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.clear();
    navigate({ pathname: '/login' });
  }, [navigate]);

  return (
    <LoginContext.Provider value={{ user, isLogged, setUser, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

import React from 'react';
import RouteComponent from './components/Route';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import LoginProvider from './providers/General';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <RouteComponent />
      </LoginProvider>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import RouteComponent from './components/Route';
import { BrowserRouter } from 'react-router-dom';
import MainWrapper from './components/MainWrapper';

import './index.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainWrapper>
        <RouteComponent />
      </MainWrapper>
    </BrowserRouter>
  );
};

export default App;

import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

type MainWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const hiddenRoutesList = ['/login', '/signup'] as const;
type HiddenRouteType = typeof hiddenRoutesList[number];

const hiddenFooterList = [
  '/profile',
  '/profile/wallet',
  '/profile/history',
  '/profile/currentbids',
  '/profile/accountsettings',
] as const;
type HiddenFooterType = typeof hiddenFooterList[number];

const MainWrapper: React.FC<MainWrapperProps> = (props) => {
  const { children, className } = props;

  const classes = classNames('softly', className);

  const location = useLocation();

  const hiddeRoute = useMemo(
    () => !hiddenRoutesList.includes(location.pathname as HiddenRouteType),
    [location.pathname],
  );

  const hiddeFooter = useMemo(
    () => !hiddenFooterList.includes(location.pathname as HiddenFooterType),
    [location.pathname],
  );

  return (
    <div className={classes}>
      {hiddeRoute && <Navbar />}
      {children}
      {hiddeRoute && hiddeFooter && <Footer />}
    </div>
  );
};

export default MainWrapper;

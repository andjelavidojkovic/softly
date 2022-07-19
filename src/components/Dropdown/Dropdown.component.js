import React, { useState, useEffect } from 'react';
import './Dropdown.style.css';
import CustomLink from '../CustomLink/CustomLink.component';
import '../Navbar/Navbar.style.css';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ options, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const onClick = () => {
      setIsActive(false);
    };

    document.body.addEventListener('click', onClick);

    return () => {
      document.body.removeEventListener('click', onClick);
    };
  }, [isActive]);

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="dropdown__item">
        <CustomLink to={option.to}>{option.value}</CustomLink>
      </div>
    );
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  });
  return (
    <div className="dropdown">
      <div
        className="dropdown__btn"
        onClick={(event) => {
          event.stopPropagation();
          setIsActive(!isActive);
        }}
      >
        {children}
      </div>
      {isActive && (
        <div className="dropdown__content">
          <div> {renderedOptions} </div>
          <div
            onClick={() => {
              localStorage.removeItem('token');
            }}
          >
            {' '}
            Logout{' '}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

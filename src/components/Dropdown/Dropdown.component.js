import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.style.css';
import CustomLink from '../CustomLink/CustomLink.component';
import '../Navbar/Navbar.style.css';

const Dropdown = ({ options, children }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      'click',
      (event) => {
        if (ref.current.contains(event.target)) {
          return;
        }
        setIsActive(false);
      },
      { capture: true },
    );
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="dropdown__item">
        <CustomLink to={option.to}>{option.value}</CustomLink>
      </div>
    );
  });

  return (
    <div ref={ref} className="dropdown">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        {children}
      </div>
      {isActive && (
        <div className="dropdown__content">
          <div> {renderedOptions} </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React from 'react';
import Dropdown from './components/Dropdown/Dropdown.component';
import MenuBurger from './components/ImageComponents/MenuBurger.icon';
const options = [
  {
    to: '/about',
    value: 'About',
  },
  {
    to: '/auctions',
    value: 'Auctions',
  },
  {
    to: '/experiences',
    value: 'Experiences',
  },
];

const About = () => {
  return (
    <div>
      <Dropdown options={options}>
        <MenuBurger />
      </Dropdown>
    </div>
  );
};

export default About;

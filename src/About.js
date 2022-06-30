import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import MenuBurger from "./components/ImageComponents/MenuBurger.icon";
const options = [
  {
    to: "/about",
    value: "About",
  },
  {
    to: "/auctions",
    value: "Auctions",
  },
  {
    to: "/experiences",
    value: "Experiences",
  },
];

const About = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      >
        <Button styleForButton="menuBurger">
          <MenuBurger />
        </Button>
      </Dropdown>
    </div>
  );
};

export default About;

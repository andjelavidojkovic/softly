// import React, { useState, useEffect, useRef } from "react";
// import CustomLink from "./CustomLink/CustomLink.component";
import React from "react";

const Dropdown = ({ options, selected, onSelectedChange, children }) => {
  //     const [open, setOpen] = useState(false);
  //   const ref = useRef();

  //   useEffect(() => {
  //     const onBodyClick = (event) => {
  //       if (ref.current.contains(event.target)) {
  //         return;
  //       }
  //       setOpen(false);
  //     };

  //     document.body.addEventListener("click", onBodyClick, { capture: true });

  //     return () => {
  //       document.body.removeEventListener("click", onBodyClick, {
  //         capture: true,
  //       });
  //     };
  //   }, []);

  const renderedOptions = options.map((option) => {
    // if (option.value === selected.value) {
    //   return null;
    // }
    return <div>{option.value}</div>;
  });

  //console.log(ref.current);

  return (
    <div>
      <div>{children}</div>
      <div>
        {/* <CustomLink to={options.to}>{options.value}</CustomLink> */}
        <div className="selectedOption"></div>
        <div>{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Dropdown;

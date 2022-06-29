import React from "react";
import Button from "./components/Button";
import FatArrow from "./components/ImageComponents/FatArrow.icon";

const Experiences = () => {
  return (
    <div>
      <div style={{ margin: "5px" }}>
        <Button styleForButton="seeMore" buttonName="See More">
          <FatArrow orientation="right" />
        </Button>
      </div>

      <div style={{ margin: "5px" }}>
        <Button styleForButton="loadMore" buttonName="Load More">
          <FatArrow orientation="bottom" />
        </Button>
      </div>

      <div style={{ margin: "5px" }}>
        <Button styleForButton="sortBy" buttonName="Sort By">
          <FatArrow orientation="bottom" />
        </Button>
      </div>
    </div>
  );
};

export default Experiences;

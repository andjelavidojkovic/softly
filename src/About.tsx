import React from 'react';
// import Button from './components/Button';
import Checkbox from './components/Checkbox';
// import FatArrow from './components/ImageComponents/FatArrow.icon';

const About = () => {
  return (
    <div>
      {/* <Button variant="primary" styleType="outline">
        BID
      </Button>
      <Button variant="primary" styleType="solid">
        START
      </Button>
      <Button
        variant="secondary"
        styleType="link"
        iconPosition="right"
        icon={<FatArrow />}
      >
        See More
      </Button>
      <Button
        variant="secondary"
        styleType="link"
        iconPosition="right"
        icon={<FatArrow />}
        rotate="down"
      >
        Sort By
      </Button>
      <Button
        variant="secondary"
        styleType="link"
        iconPosition="bottom"
        icon={<FatArrow />}
        rotate="down"
      >
        Load More
      </Button> */}
      <Checkbox>Remember me</Checkbox>
    </div>
  );
};

export default About;

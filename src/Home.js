import React from "react";
import IntroductionAndConclusion from "./components/IntroductionAndConclusion";

const Home = () => {
  return (
    <div>
      <IntroductionAndConclusion
        title="Title"
        buttonName="CTA TEXT"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      ></IntroductionAndConclusion>
      <IntroductionAndConclusion
        title="Sell with Softly"
        buttonName="START"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        img="./images/Rectangle14.jpg"
        alt="lorem ipsum dolor"
      ></IntroductionAndConclusion>
    </div>
  );
};

export default Home;

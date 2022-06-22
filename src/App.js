import React from "react";
//import Polygon from "./components/Button/Polygon";
//import Footer from "./components/Footer/Footer";
//import AuctionItem from "./components/AuctionItem";
//import Route from "./components/Route";
//import About from "./components/About";
import Intro from "./components/Intro/Intro";
//import IntroductionAndConclusion from './components/IntroductionAndConclusion';
//import Auctions from "./components/Auctions";
//import Experiences from "./components/Experiences";
import Img from "./components/Intro/Img";

const App = () => {
  return (
    <div>
      <Intro
        title={"Title"}
        buttonName={"CTA TEXT"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      ></Intro>
      <Intro
        title={"Title"}
        buttonName={"CTA TEXT"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      >
        <Img />
      </Intro>
    </div>
  );
};

export default App;

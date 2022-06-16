import React from "react";
import Button from "./components/Button";
import AuctionItem from "./components/AuctionItem";
//import Polygon from "./components/Button/Polygon";
//import Footer from "./components/Footer/Footer";
//import AuctionItem from "./components/AuctionItem";
//import Route from "./components/Route";
//import About from "./components/About";
import Header from "./components/Header";
import Heading from "./components/Heading/Heading";
import Intro from "./components/Intro/Intro";
//import IntroductionAndConclusion from './components/IntroductionAndConclusion';
//import Auctions from "./components/Auctions";
//import Experiences from "./components/Experiences";
import Img from "./components/Intro/Img";

const App = () => {
  return (
    <div>
      <div>
        <Button name="OUT BID" styleForButton="redButton" />
      </div>
      <div>
        <Button name="BID" styleForButton="regularButton" />
      </div>
      <div>
        <Button name="START" styleForButton="whiteButton" />
      </div>
      <Header />
      <Heading>Auctions</Heading>
      <Button styleForButton="See More">See More</Button>

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

      <AuctionItem />
    </div>
  );
};

export default App;

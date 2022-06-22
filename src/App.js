import React from "react";
import Footer from "./components/Footer/Footer";
//import AuctionItem from "./components/AuctionItem";
//import Route from "./components/Route";
//import About from "./components/About";
import Header from "./components/Header";
import Img from "./components/Intro/Img";
import Intro from "./components/Intro/Intro";
//import Auctions from "./components/Auctions";
//import Experiences from "./components/Experiences";
import IntroductionAndConclusion from "./components/IntroductionAndConclusion/IntroductionAndConclusion";

const App = () => {
  return (
    <div>
      <Header />

      <Intro title={'Sell with Softly'} buttonName={'START'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'}>
        <Img />
      </Intro>

      <Intro title={'Title'} buttonName={'CTA TEXT'} />

      <IntroductionAndConclusion />
      <IntroductionAndConclusion greenOrPinkElement="green" />
      <Footer />
    </div>
  )
}

export default App;

import React from "react";
import Footer from "./components/Footer/Footer";
//import AuctionItem from "./components/AuctionItem";
//import Route from "./components/Route";
//import About from "./components/About";
import Header from "./components/Header";
//import Auctions from "./components/Auctions";
//import Experiences from "./components/Experiences";
import IntroductionAndConclusion from "./components/IntroductionAndConclusion/IntroductionAndConclusion";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <IntroductionAndConclusion />
      <IntroductionAndConclusion greenOrPinkElement="green" />
    </div>
  )
}

export default App;

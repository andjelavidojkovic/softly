import React from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
//import Footer from "./components/Footer/Footer";
//import AuctionItem from "./components/AuctionItem";
import IntroductionAndConclusion from "./components/IntroductionAndConclusion";
import "./index.css";
import AuctionItem from "./components/AuctionItem";

const App = () => {
  return (
    <div>
      <IntroductionAndConclusion
        title={"Title"}
        buttonName={"CTA TEXT"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      ></IntroductionAndConclusion>
      <IntroductionAndConclusion
        title={"Sell with Softly"}
        buttonName={"START"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
        img={"./images/Rectangle14.jpg"}
      ></IntroductionAndConclusion>

      <AuctionItem url={"./images/Rectangle6.jpg"}> BID </AuctionItem>
      <br />
      <AuctionItem url={"./images/Rectangle14.jpg"}> BOOK </AuctionItem>

      <div style={{ margin: "5px" }}>
        <Button styleForButton={"seeMore"} icon={"./images/Polygon1.svg"}>
          See More
        </Button>
      </div>
      <div style={{ margin: "5px" }}>
        <Button styleForButton={"loadMore"} icon={"./images/Polygon1.svg"}>
          Load More
        </Button>
      </div>
      <div style={{ margin: "5px" }}>
        <Button styleForButton={"sortBy"} icon={"./images/Polygon1.svg"}>
          Sort By
        </Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;

import React from "react";
import Footer from "./components/Footer";
import "./index.css";
import RouteComponent from "./components/Route";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <RouteComponent />
      <Footer />
    </>
  );
};

export default App;

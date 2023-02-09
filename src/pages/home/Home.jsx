import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Destinations from "../../components/destinations/Destinations";
// import DestinationLabel from "../../components/destinationLabel/DestinationLabel";
import FeaturedRentals from "../../components/featuredRentals/FeaturedRentals";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Destinations />
      <FeaturedRentals />
      <Footer />
    </div>
  );
};

export default Home;

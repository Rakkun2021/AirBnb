import React from "react";
import "./featuredRentals.css";
import DestinationLabel from "../destinationLabel/DestinationLabel";

const FeaturedRentals = () => {
  return (
    <div className="featuredRentals">
      <div className="fRSlot">
        <DestinationLabel />
      </div>
    </div>
  );
};

export default FeaturedRentals;

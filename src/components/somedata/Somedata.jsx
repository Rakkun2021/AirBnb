import React from "react";
import { useContext } from "react";
import { DataContext } from "../dataContext/DataContext";

const SomeComponent = () => {
  const data = useContext(DataContext);
  // data is the array of objects you provided
  return (
    <div>
      {data.map((item) => (
        <div key={item.url}>
          <h2>{item.name}</h2>
          <p>Stars: {item.stars}</p>
          <p>Number of guests: {item.numberOfGuests}</p>
          <p>Address: {item.address}</p>
          <p>Room type: {item.roomType}</p>
          <p>
            Location: lat: {item.location.lat}, lng: {item.location.lng}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SomeComponent;

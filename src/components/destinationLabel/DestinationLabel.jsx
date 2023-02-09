import React from "react";
import "./destinationLabel.css";
import StarIcon from "@mui/icons-material/Star";
import { useContext } from "react";
import { DataContext } from "../dataContext/DataContext";
import MySwiper from "../swiper/Swiper";
import { Link } from "react-router-dom";

const DestinationLabel = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      {data.map((item, index) => {
        let address = item.address;
        if (address.includes("United States")) {
          address = address.replace("United States", "USA");
        }
        return (
          <Link key={index} to={`/room/${item.id}`}>
            <div className="destinationLabel">
              <div className="images">
                <MySwiper item={item} />
              </div>
              <div className="heading">
                <div className="title">{address}</div>
                <div className="rating">
                  <StarIcon className="icon" />
                  <p>{item.stars}</p>
                </div>
              </div>
              <div className="area">{item.numberOfGuests} guests</div>
              <div className="duration">{item.roomType}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default DestinationLabel;

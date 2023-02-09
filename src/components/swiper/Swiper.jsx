import React from "react";
import { useState } from "react";
// import { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import { DataContext } from "../dataContext/DataContext";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MySwiper({ item }) {
  const limitedPhotos = item.photos.slice(0, 7);
  const [hideLeftArrow, setHideLeftArrow] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex === limitedPhotos.length - 1) {
      setHideLeftArrow(true);
    } else {
      setHideLeftArrow(false);
    }
    if (swiper.activeIndex === 0) {
      setHideRightArrow(true);
    } else {
      setHideRightArrow(false);
    }
  };

  return (
    <>
      <div
        className="swiper-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          onSlideChange={handleSlideChange}
          cssMode={true}
          navigation={{
            nextEl: ".my-next-button",
            prevEl: ".my-prev-button",
          }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {limitedPhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img src={photo.pictureUrl} alt="" />
            </SwiperSlide>
          ))}
          <FavoriteBorderIcon className="favIcon" />
          <div
            className={isHovered ? "my-next-button" : "my-next-button hidden"}
            style={{ display: hideLeftArrow ? "none" : "block" }}
          >
            <ArrowCircleLeftIcon className="icon" />
          </div>
          <div
            className={isHovered ? "my-prev-button" : "my-prev-button hidden"}
            style={{ display: hideRightArrow ? "none" : "block" }}
          >
            <ArrowCircleRightIcon className="icon" />
          </div>
        </Swiper>
      </div>
    </>
  );
}
export default MySwiper;

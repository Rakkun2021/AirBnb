import React, { useEffect } from "react";
import "./rooms.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import WaterIcon from "@mui/icons-material/Water";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WifiIcon from "@mui/icons-material/Wifi";
import DeckIcon from "@mui/icons-material/Deck";
import VerifiedIcon from "@mui/icons-material/Verified";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppsIcon from "@mui/icons-material/Apps";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NewCal from "../../components/newCalendar/NewCal";
import { useContext } from "react";
import { CalendarContext } from "../../components/calendarContext/CalendarContext";
import { DataContext } from "../../components/dataContext/DataContext";
import { useParams } from "react-router-dom";
import MyMap from "../../components/mapLocation/GoogleMap.jsx";
import { Link } from "react-router-dom";

const Rooms = () => {
  const { startDate, endDate, selectedDays } = useContext(CalendarContext);
  const { data } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const item = data[id];

  const amt = item.pricing.rate.amount;
  const finalAmt = amt * selectedDays;

  const lat = parseFloat(item.location.lat);
  const lng = parseFloat(item.location.lng);

  return (
    <>
      <div className="rooms">
        <div className="header">
          <Link to="/">
            <div className="left">
              <img src="../images/Airbnb-logo.jpeg" alt="" className="logo" />
            </div>
          </Link>
          <div className="center">
            <input type="text" placeholder="Start your search here" />
            <div className="iconCircle">
              <SearchIcon className="icon" />
            </div>
          </div>
          <div className="right">
            <div className="becomeHost">Airbnb your home</div>
            <LanguageIcon className="icon" />
            <div className="loginDropdown">
              <MenuIcon className="icon" />
              <AccountCircleIcon className="icon" />
              <div className="notification"></div>
            </div>
          </div>
        </div>
        <div className="showCase">
          <div className="destinationName">
            {/* <h1>A whole medieval castle for you</h1> */}
            <h1>{item.name}</h1>
          </div>
          <div className="metaInfo">
            <div className="left">
              <div className="rating">
                <StarIcon style={{ height: "20px", width: "20px" }} />{" "}
                {item.stars}
              </div>
              <div
                className="reviewCount"
                style={{ textDecoration: "underline" }}
              >
                {item.reviews.length} reviews
              </div>
              <div className="location" style={{ textDecoration: "underline" }}>
                {item.address}
              </div>
            </div>
            <div className="right">
              <div className="share">
                <IosShareIcon className="icon" />
                &#160; share
              </div>
              <div className="save">
                <FavoriteBorderIcon className="icon" />
                &#160; save
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="masonry1">
              <img src={item.photos[0].pictureUrl} alt="" className="images" />
            </div>
            <div className="masonry2">
              <div className="masonry2i">
                <img
                  src={item.photos[1].pictureUrl}
                  alt=""
                  className="images"
                />
                <img
                  src={item.photos[2].pictureUrl}
                  alt=""
                  className="images"
                />
              </div>
              <div className="masonry2ii">
                <img
                  src={item.photos[3].pictureUrl}
                  alt=""
                  className="images"
                />
                <img
                  src={item.photos[4].pictureUrl}
                  alt=""
                  className="images"
                />
              </div>
            </div>
          </div>
          <div className="showAllPhotos">
            <AppsIcon />
            &#160; Show All Photos
          </div>
        </div>
        <div className="splitSection">
          <div className="roomNAvailability">
            <div className="hostInfo">
              <div className="hostedBy">
                <div className="hostIntro">
                  <p>Entire home hosted by {item.primaryHost.smartName}</p>
                  <div className="amenityIntro">
                    <div className="guests">{item.numberOfGuests}</div>
                    <div className="dot">.</div>
                    <div className="homeType">{item.roomType}</div>
                    <div className="dot">.</div>
                    <div className="bedCount">
                      {item.bedCount ? item.bedCount : "N/A"}
                    </div>
                    <div className="dot">.</div>
                    <div className="bathRoomCount">
                      {item.bathRooms ? item.bathRooms : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hostedByPic">
                <img
                  src={item.primaryHost.thumbnailUrl}
                  alt=""
                  className="hostPic"
                />
              </div>
            </div>
            <div className="hostnAmenityInfo">
              <div className="hnALabel">
                <div className="icon">
                  <MeetingRoomIcon style={{ height: "20px", width: "20px" }} />{" "}
                  <p>&#160; Self check-in</p>
                </div>
                <p>Check yourself in with the lockbox.</p>
              </div>
              <div className="hnALabel">
                <div className="icon">
                  <MilitaryTechIcon style={{ height: "20px", width: "20px" }} />{" "}
                  <p>&#160;{item.primaryHost.smartName} is a Superhost</p>
                </div>
                <p>
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for their guests.
                </p>
              </div>
              <div className="hnALabel">
                <div className="icon">
                  <CalendarMonthIcon
                    style={{ height: "20px", width: "20px" }}
                  />{" "}
                  <p>&#160;Free cancellation before 30 Jan.</p>
                </div>
              </div>
            </div>
            <div className="airCover">
              <div className="airCoverLogo">
                <img
                  src="../images/aircover.png"
                  alt=""
                  style={{ height: "30px", width: "150px" }}
                />
              </div>
              <p>
                Every booking includes free protection from Host cancellations,
                listing inaccuracies, and other issues like trouble checking in.
              </p>
              <p style={{ textDecoration: "underline" }}>Learn more</p>
            </div>
            <div className="roomInfo">
              <p>
                A cozy cottage between pines and the lake just in 2 steps from
                Saimaa. It is quite small inside (30 square meters) with a big
                open terrace and a green lawn in front of it. There are a Loft
                bed for 2 people with a view, a small kitchen, fireplace, sauna
                on woods inside the cabin. It is great to start your day from
                early swimming and yoga/breakfast at the terrace listening to
                birds songs and finish your day with a glass of wine taking
                pictures of a
              </p>
              <p style={{ textDecoration: "underline" }}>Show more</p>
            </div>
            <div className="whereUSleep">
              <p>Where you'll sleep</p>
              {/* <img src="./images/mountain-7139402_1920.jpg" alt="" /> */}
              <div className="iconEnclosure">
                <div className="icons">
                  <div className="icon">
                    <BedIcon
                      style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "30px",
                      }}
                    />
                  </div>
                  <div className="icon">
                    <ChairIcon style={{ height: "30px", width: "30px" }} />
                  </div>
                </div>
                <p>Bedroom area</p>
                <p>1 king bed, 1 sofa bed</p>
              </div>
            </div>
            <div className="placeOffers">
              <p>What this place offers</p>
              <div className="pOLists">
                <ul>
                  <li>
                    <WaterIcon className="icon" />
                    Lake view
                  </li>
                  <li>
                    <KitchenIcon className="icon" />
                    Kitchen view
                  </li>
                  <li>
                    <LocalParkingIcon className="icon" />
                    Free parking on premises
                  </li>
                  <li>
                    <FireplaceIcon className="icon" />
                    Indoor fireplace
                  </li>
                </ul>
                <ul>
                  <li>
                    <BeachAccessIcon className="icon" />
                    Beach access – Beachfront
                  </li>
                  <li>
                    <WifiIcon className="icon" />
                    Wifi
                  </li>
                  <li>
                    <DeckIcon className="icon" />
                    Private patio or balcony
                  </li>
                  <li>
                    <LanguageIcon className="icon" />
                    Luggage drop-off allowed
                  </li>
                </ul>
              </div>
            </div>
            <div className="calender">
              <NewCal />
            </div>
          </div>
          <div className="priceCard">
            <div className="ratenRating">
              <div className="priceSec">
                <p className="price">{item.pricing.rate.amountFormatted}</p>
                <p className="time">night</p>
              </div>
              <div className="ratingSec">
                <StarIcon className="icon" />
                <p>{item.stars}</p>
                <p style={{ paddingBottom: "8px" }}>&#160;.</p>&#160;
                <p style={{ textDecoration: "underline", color: "gray" }}>
                  {item.primaryHost.badges[0]}
                </p>
              </div>
            </div>
            <div className="statusGrid">
              <div className="checkIn">
                <p>CHECK-IN</p>
                {startDate ? (
                  <p>{startDate}</p>
                ) : (
                  <p style={{ fontWeight: "300", fontSize: "15px" }}>
                    Add date
                  </p>
                )}
              </div>
              <div className="checkOut">
                <p>CHECKOUT</p>
                {endDate ? (
                  <p>{endDate}</p>
                ) : (
                  <p style={{ fontWeight: "300", fontSize: "15px" }}>
                    Add date
                  </p>
                )}
              </div>
              <div className="guests">
                <div className="guestCount">
                  <p style={{ fontWeight: "700", fontSize: "10px" }}>GUESTS</p>
                  <p style={{ fontWeight: "300" }}>1 guest</p>
                </div>
                <KeyboardArrowDownIcon className="icon" />
              </div>
            </div>
            <button>Reserve</button>
            <div className="note">
              <p style={{ fontWeight: "300", fontSize: "15px" }}>
                You won't be charged yet
              </p>{" "}
            </div>
            <div className="calculation">
              <div className="calc">
                {item.pricing.rate.amountFormatted} x {selectedDays} nights
              </div>
              <div className="total">{finalAmt}</div>
            </div>
            <div className="serviceCalc">
              <div className="serCalc" style={{ textDecoration: "underline" }}>
                Service fee
              </div>
              <div className="serTotal">{(finalAmt / 100) * 10}</div>
            </div>
            <div className="final">
              <p>Total before taxes</p>
              <p>{finalAmt}</p>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="overalls">
            <div className="icon">
              <StarIcon />
            </div>
            <p>{item.stars}</p>
            <p style={{ paddingBottom: "10px" }}>.</p>
            <p>{item.primaryHost.badges[0]}</p>
          </div>
          <div className="reviewHighlights">
            <ul>
              <li>Cleanliness</li>
              <li>Communication</li>
              <li>Check-in</li>
            </ul>
            <ul>
              <li>Accuracy</li>
              <li>Location</li>
              <li>Value</li>
            </ul>
          </div>
          <div className="indiReviews">
            {item.reviews.map((review, index) => (
              <div className="proPic" key={{ index }}>
                <div className="tile1">
                  <img src={review.author.pictureUrl} alt="" />
                  <div className="reviewInfo">
                    <div className="name">{review.author.firstName}</div>
                    <div className="date">{review.localizedDate}</div>
                  </div>
                </div>
                <div className="tile2">
                  <div className="reviewDesc">{review.comments}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mapLocation">
          <h1>Where you'll be</h1>
          <div className="map">
            <MyMap lat={lat} lng={lng} />
          </div>
          <div className="locationAddress">{item.address}</div>
          <p>
            The nearest market is in 25km. The nearest summer Cafe is in 2km -
            with a great panoramic view and a family museum.
          </p>
        </div>
        <div className="hostStatus">
          <div className="aboutHost">
            <div className="labelHost">
              <img src={item.primaryHost.thumbnailUrl} alt="" />
              <div className="hostInfoMain">
                <div className="hostInfo">
                  Hosted by {item.primaryHost.smartName}
                </div>
                <div className="joinDate">{item.primaryHost.memberSince}</div>
              </div>
            </div>
            <div className="hostBadges">
              <div className="earnedReviews">
                <StarIcon className="icon" />
                <p>&#160;{item.primaryHost.badges[0]}</p>
              </div>
              <div className="identityVerified">
                <VerifiedIcon className="icon" />
                <p>&#160;Identity verified</p>
              </div>
              <div className="hostLabel">
                <MilitaryTechIcon className="icon" />
                <p>&#160;Superhost</p>
              </div>
            </div>
            <div className="hostText">
              Prefer staying at nature to a big city and outdoors activities to
              staying at home/love cycling, swimming, walking, travelling. try
              to be a good and attentive host:
            </div>
            <div className="hostText">
              <span>{item.primaryHost.smartName} is a Superhost</span> <br />{" "}
              <p>
                {" "}
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.{" "}
              </p>
            </div>
          </div>
          <div className="aboutHost2">
            <p>Languages: English, Русский</p>
            <p>Response rate: 100%</p>
            <p>Response time: within an hour</p>
            <button>Contact Host</button>
            <div className="caution">
              <div className="icon">
                <img
                  src="../images/iX1iTcW.png"
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
              <p>
                To protect your payment, never transfer money or communicate
                outside of the Airbnb website or app.
              </p>
            </div>
          </div>
        </div>
        <div className="precautions">
          <p>Things to know</p>
          <div className="things">
            <div className="things1">
              <p style={{ fontWeight: "600", fontSize: "18px" }}>House rules</p>
              <p>Check-in: 2:00 pm – 11:00 pm</p>
              <p>Checkout before 1:00 pm</p>
              <p>3 guests maximum</p>
            </div>
            <div className="things2">
              <p style={{ fontWeight: "600", fontSize: "18px" }}>
                Safety & property
              </p>
              <p>Nearby lake, river, other body of water</p>
              <p>Carbon monoxide alarm</p>
              <p>Smoke alarm</p>
            </div>
            <div className="things3">
              <p style={{ fontWeight: "600", fontSize: "18px" }}>
                Free cancellation before 30 Jan.
              </p>
              <p>
                Review the Host’s full cancellation policy which applies even if
                you cancel for illness or disruptions caused by COVID-19.
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="copyrightSection">
            <div className="footerLeft">
              <p>&copy; 2023 Airbnb, Inc.</p>
              <p className="dots">.</p>
              <p>Privacy</p>
              <p className="dots">.</p>
              <p>Terms</p>
              <p className="dots">.</p>
              <p>Sitemap</p>
              <p className="dots">.</p>
              <p>Company Details</p>
            </div>
            <div className="footerRight">
              <div className="lang">
                <LanguageIcon className="icon" />
                <p>English (IN)</p>
              </div>
              <div className="currency">$ USD</div>
              <div className="socials">
                <FacebookIcon className="icon" />
                <TwitterIcon className="icon" />
                <InstagramIcon className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;

import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src="./images/Airbnb-logo.jpeg" alt="" className="logo" />
      </div>
      <div className="center">
        <p>Anywhere</p>
        <p>Any week</p>
        <button className="addGuest">Add guests</button>
        <SearchIcon className="icon"/>
      </div>
      <div className="right">
        <div className="becomeHost">
          <p>Airbnb your home</p>
        </div>
        <div className="language">
          <LanguageIcon className="icon" />
        </div>
        <div className="loginDropdown">
          <MenuIcon className="icon" />
          <AccountCircleIcon className="icon" />
          <div className="notification"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

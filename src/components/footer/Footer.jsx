import React from "react";
import "./footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
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
  );
};

export default Footer;

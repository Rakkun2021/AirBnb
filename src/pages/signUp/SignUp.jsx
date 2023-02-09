import React from "react";
import "./signUp.css";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import MailOutlineIcon from "@mui/icons-material/MailOutline";


const SignUp = () => {
  return (
    <div className="signUp">
      <div className="header">
        <div className="left">
          <img src="./images/Airbnb_Logo.png" alt="" className="logo" />
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
      <div className="signUpSection">
        <div className="signUpCard">
          <div className="loginTitle">
            <h2>Log in or sign up</h2>
          </div>
          <div className="loginForm">
            <div className="inputSection">
              <h3>Welcome to Airbnb</h3>
              {/* <KeyboardArrowDownIcon className="inputIcon"/> */}
              <input type="text" placeholder="Country/Region"/>
              <input type="phone-number" placeholder="Phone number"/>
              <p>
                We’ll call or text you to confirm your number. Standard message
                and data rates apply. <br />
                <span className="pp">Privacy Policy</span>
              </p>
            </div>
            <button>Continue</button>
            <span className="or">or</span>
          </div>
          <div className="loginOauth">
            <button className="auth">
              <img
                src="./images/Facebook_logo.png"
                alt=""
                className="facebookIcon"
              />
              <p>Continue with Facebook</p>
            </button>
            <button className="auth">
              <img
                src="./images/Google__logo.png"
                alt=""
                className="googleIcon"
              />
              <p>Continue with Facebook</p>
            </button>
            <button className="auth">
              <AppleIcon className="appleIcon" />
              <p>Continue with Facebook</p>
            </button>
            <button className="auth">
              <MailOutlineIcon className="mailIcon" />
              <p>Continue with Facebook</p>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="listOfLinks">
          <ul>
            <li className="listTitle">Support</li>
            <li>Air Center</li>
            <li>Cancellations</li>
            <li>Covid 19</li>
          </ul>
          <ul>
            <li className="listTitle">Community</li>
            <li>Airbnb blog</li>
            <li>Discrimination</li>
            <li>Nation</li>
          </ul>
          <ul>
            <li className="listTitle">Hosting</li>
            <li>Airbnb your home</li>
            <li>Explore hosting</li>
            <li>Visit us</li>
          </ul>
          <ul>
            <li className="listTitle">Airbnb</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
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
  );
};

export default SignUp;

import React from "react";
import GitHubIcon from "../Assets/Images/Icons/github.png";
import LinkedInIcon from "../Assets/Images/Icons/linkedin.webp";
import EmailIcon from "../Assets/Images/Icons/gmail.png";
import MeritPagesIcon from "../Assets/Images/Icons/merit.png";

const Footer = () => {
  return (
    <footer>
      <div className="link-container">
        <div>
          <a href="https://github.com/ff1574">
            <img src={GitHubIcon} alt="GitHub" />
            GitHub
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/franko-fišter-b55621274">
            <img src={LinkedInIcon} alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://meritpages.com/ff1574">
            <img src={MeritPagesIcon} alt="Merit Pages" />
            Merit Page
          </a>
        </div>
        <div>
          <a href="mailto:franko.fister@gmail.com">
            <img src={EmailIcon} alt="Email" />
            Gmail
          </a>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Franko Fišter</p>
    </footer>
  );
};

export default Footer;

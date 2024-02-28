import React from "react";
import footerCSS from "../Assets/CSS/footer.css";

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Franko Fišter</p>
    </footer>
  );
};

export default Footer;

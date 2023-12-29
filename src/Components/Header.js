import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimation,
} from "framer-motion/dist/framer-motion";
import portrait from "../Assets/Images/portrait.png";

const Header = () => {
  // Array of titles to be displayed
  const titles = ["Full Stack Developer", "Spring Boot", "React.js", "MSSQL"];

  // Render the header component
  return (
    <header>
      <div className="title-div">
        <h1>Hi! My name is</h1>
        <img src={portrait} alt="Portrait" className="portrait-image" />
        <h1>Franko</h1>
        {/* TODO: TITLE ANIMATIONS */}
      </div>
    </header>
  );
};

export default Header;

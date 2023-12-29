import React, { useState } from "react";
import portrait from "../Assets/Images/portrait.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Header = () => {
  const [titles, setTitles] = useState([
    "Full Stack Developer",
    "React",
    "MSSQL",
    "Spring Boot",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTitle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  return (
    <header>
      <div className="title-div">
        <h1>Hi! My name is</h1>
        <img src={portrait} alt="Portrait" className="portrait-image" />
        <h1>Franko</h1>
        <TransitionGroup>
          <CSSTransition
            key={titles[currentIndex]}
            timeout={500}
            classNames="title-animation"
          >
            <h2>{titles[currentIndex]}</h2>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </header>
  );
};

export default Header;

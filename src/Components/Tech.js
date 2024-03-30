import React from "react";
import "../Assets/CSS/tech.css";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="tech-container">
      {technologies.map((technology) => (
        <div className="ball-container" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;

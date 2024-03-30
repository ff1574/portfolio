import React from "react";
import "../Assets/CSS/tech.css";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

// Function to group technologies into rows
const groupTechnologies = (technologies) => {
  let rows = [];
  let currentRow = [];
  let isOddRow = true; // Start with an odd row

  technologies.forEach((tech, index) => {
    currentRow.push(tech);
    const isEndOfRow = isOddRow
      ? currentRow.length === 3
      : currentRow.length === 2;

    if (isEndOfRow || index === technologies.length - 1) {
      rows.push([...currentRow]); // Push the current row to rows
      currentRow = []; // Reset current row
      isOddRow = !isOddRow; // Toggle between odd and even rows
    }
  });

  return rows;
};

const Tech = () => {
  const technologyRows = groupTechnologies(technologies);

  return (
    <div className="tech-container">
      {technologyRows.map((row, rowIndex) => (
        <div className="tech-row" key={rowIndex}>
          {row.map((technology) => (
            <div className="ball-container" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tech;

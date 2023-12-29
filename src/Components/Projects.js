import React from "react";
import pokedex from "../Assets/Images/pokedex.png";
import pizzeria from "../Assets/Images/pizzeria.png";
import amongus from "../Assets/Images/among-us.jpg";
import tunisia from "../Assets/Images/tunisia.jpg";
import openai from "../Assets/Images/openai.png";
import dadbot from "../Assets/Images/dad-bot.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Pokedex App",
      description:
        "Created a mobile app using React Native that connects to PokeAPI REST which displays Pokemon and information about them.",
      link: "https://github.com/ff1574/pokedex",
      image: pokedex,
    },
    {
      name: "Pizzeria Website",
      description:
        "Created a responsive website for Il Mondo Pizzeria using HTML, CSS, and JS.",
      link: "http://www.ilmondopizzeria.hr/",
      image: pizzeria,
    },
    {
      name: "Among Us Game",
      description:
        "Created an “Among Us”-like game with a college classmate using JavaFX from scratch.",
      link: "https://github.com/ff1574/among-us",
      image: amongus,
    },
    {
      name: "Tunisia Website",
      description:
        "Created a responsive website for an individual college project using PHP, HTML, CSS, and JS.",
      link: "https://github.com/ff1574/tunisia-website",
      image: tunisia,
    },
    {
      name: "OpenAI API App",
      description:
        "Created a JavaFX app that connects to the OpenAI API, allows manipulating the AI response via sliders for temperature and max tokens.",
      link: "https://github.com/ff1574/open-AI",
      image: openai,
    },
    {
      name: "Discord Bot",
      description:
        "As a personal project I have created a discord bot using JS, hosted off my computer via Node.js.",
      link: "https://github.com/ff1574/dad-bot",
      image: dadbot,
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-div">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-image">
              <img src={project.image} alt={project.name} />
              <div className="project-name">{project.name}</div>
            </div>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

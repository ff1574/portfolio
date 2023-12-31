import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import pokedex from "../Assets/Images/pokedex.jpg";
import pizzeria from "../Assets/Images/pizzeria.png";
import amongus from "../Assets/Images/among-us.jpg";
import tunisia from "../Assets/Images/tunisia.jpg";
import openai from "../Assets/Images/openai.png";
import dadbot from "../Assets/Images/dad-bot.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Pokedex App",
      description:
        "This was definitely a really fun project that I did in my free time. I wanted to learn React Native so I've created a React Native app that connects to PokeAPI and displays all the original 151 Pokemon and their statistics. It was created in React Native / Expo.",
      link: "https://github.com/ff1574/pokedex",
      image: pokedex,
    },
    {
      name: "Pizzeria Website",
      description:
        "This website was created for Pizzeria Il Mondo, a local pizzeria in Zagreb, Croatia. The plan is to soon recreate it using better technologies and make it work for online orders, as currently it is just a non interactible menu.",
      link: "http://www.ilmondopizzeria.hr/",
      image: pizzeria,
    },
    {
      name: "Among Us Game",
      description:
        "This was a final project for a semester, the task was to create an 'Among Us' game using JavaFX. The project couldn't be finished in time so you can only do a pacifist run :)",
      link: "https://github.com/ff1574/among-us",
      image: amongus,
    },
    {
      name: "Tunisia Website",
      description:
        "This is one of the college projects that I am proud of as it was my first website where I started learning how to create cool effects with only base HTML, CSS, JS, and PHP.",
      link: "https://github.com/ff1574/tunisia-website",
      image: tunisia,
    },
    {
      name: "OpenAI API App",
      description:
        "This was a quick and fun project during the chaos of the final exams. I've created a JavaFX app that connects to OpenAI API and allows you to manipulate the response through sliders. It was created in Java / JavaFX.",
      link: "https://github.com/ff1574/open-AI",
      image: openai,
    },
    {
      name: "Discord Bot",
      description:
        "One of my first projects ever, I've created a Discord bot using Node.js that responds to messages with dad jokes. It was made as a fun running joke between friends and still lives on a private Discord server. It was created in Javascript and hosted with Node.js",
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
          <div
            key={index}
            className="project-item"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.name} />
              <div className="project-name">{project.name}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <motion.div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{
              opacity: 1,
              y: 0,
              transitionEnd: {
                x: [0, -10, 10, -10, 10, 0],
                transition: { duration: 0.5 },
              },
            }}
            exit={{ opacity: 0, y: "100vh" }}
          >
            <span className="close" onClick={() => setSelectedProject(null)}>
              &times;
            </span>
            <img
              className="project-modal-image"
              src={selectedProject.image}
              alt={selectedProject.name}
            />
            <h2 className="project-modal-name">{selectedProject.name}</h2>
            <p className="project-modal-description">
              {selectedProject.description}
            </p>
            <button
              className="animated-button"
              onClick={() => window.open(selectedProject.link, "_blank")}
            >
              Link
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Assets/CSS/projects.css";
import "../Assets/CSS/custom-button.css";
import projectsTitle from "../Assets/projects-title.gif";
import carstore from "../Assets/Images/car-store.jpg";
import carshopwebsite from "../Assets/Images/car-shop-website.png";
import dotnet from "../Assets/Images/dotnet.png";
import pokedex from "../Assets/Images/pokedex.jpg";
import amongus from "../Assets/Images/among-us.jpg";
import tunisia from "../Assets/Images/tunisia.jpg";
import openai from "../Assets/Images/openai.png";
import dadbot from "../Assets/Images/dad-bot.jpg";
import eventmanager from "../Assets/Images/eventmanager.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Full Stack Web App",
      description:
        "This project showcases the usage and connection of React, Spring Boot, and MySQL to create a full stack web application. This project was collaborative work, which also showcases git flow, code reviews, and agile development.",
      link: "https://github.com/ff1574/car-store",
      image: carstore,
    },
    {
      name: "Event Manager PHP Web App",
      description:
        "I wanted to implement an MVC pattern with a loosely typed language, so I've created a PHP MVC web app that connects to a MySQL database to manage events.",
      link: "https://github.com/ff1574/event-manager-php",
      image: eventmanager,
    },
    {
      name: "JS MVC Web App",
      description:
        "This was a college project that taught us how to use MVC, it was challenging to implement considering that JS is a loosely typed language.",
      link: "https://github.com/ff1574/car-shop-website",
      image: carshopwebsite,
    },
    {
      name: "ASP.NET / jQuery Web App",
      description:
        "This was a college project that taught us how to use ASP.NET and jQuery, it was challenging to implement considering that ASP.NET is a framework that I've never used before.",
      link: "https://github.com/ff1574/dotnet-project.git",
      image: dotnet,
    },
    {
      name: "Pokedex Mobile App",
      description:
        "This was definitely a really fun project that I did in my free time. I wanted to learn React Native so I've created a React Native app that connects to PokeAPI and displays all the original 151 Pokemon and their statistics. It was created in React Native / Expo.",
      link: "https://github.com/ff1574/pokedex",
      image: pokedex,
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
  ];

  return (
    <div className="projects-div">
      <img
        className="projects-title-image"
        src={projectsTitle}
        alt="Projects Title"
      />
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
              className="link-button"
              onClick={() => window.open(selectedProject.link, "_blank")}
            >
              <span className="link-button-text-container">
                <span className="link-button-text">Link</span>
              </span>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;

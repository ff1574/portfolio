import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "This is a brief description of Project 1.",
      liveLink: "http://www.project1.com",
      codeLink: "http://www.github.com/username/project1",
    },
    {
      name: "Project 2",
      description: "This is a brief description of Project 2.",
      liveLink: "http://www.project2.com",
      codeLink: "http://www.github.com/username/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Version
          </a>
          <br />
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

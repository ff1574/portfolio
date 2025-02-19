import React from "react";
import "../Assets/CSS/about.css";

const About = () => {
  return (
    <div className="about-div">
      <h2>About Me</h2>
      <h3>Experience</h3>
      <p>
        Passionate Junior Full Stack Developer with hands-on experience in
        rewriting and modernizing a legacy application. Proficient in{" "}
        <span className="keyword">React</span>,{" "}
        <span className="keyword">Spring Boot</span>, and{" "}
        <span className="keyword">MySQL</span>, currently working on migrating a
        database from <span className="keyword">MySQL</span> to{" "}
        <span className="keyword">MSSQL</span>.
      </p>
      <h3>Projects</h3>
      <p>
        Demonstrated expertise in creating diverse applications, from a{" "}
        <span className="keyword">React Native</span> app connecting to{" "}
        <span className="keyword">PokeAPI</span> to a multiplayer game similar
        to 'Among Us' using <span className="keyword">JavaFX</span>. Proven
        ability to integrate <span className="keyword">JavaFX</span> with{" "}
        <span className="keyword">OpenAI API</span>, allowing manipulation of AI
        responses through sliders. Additionally, well-versed in building{" "}
        <span className="keyword">Discord</span> bots hosted via{" "}
        <span className="keyword">Node.js</span>.
      </p>
      <h3>Education</h3>
      <p>
        Currently pursuing a degree in{" "}
        <span className="keyword">Web & Mobile Computing</span> at{" "}
        <span className="keyword">RIT Croatia</span>, with a strong foundation
        in Information Technology from{" "}
        <span className="keyword">Technical School Ruđer Bošković</span>.
      </p>
      <h3>Languages</h3>
      <p>
        Fluent in <span className="keyword">English</span>,{" "}
        <span className="keyword">Croatian</span>, and exploring{" "}
        <span className="keyword">Spanish</span>.
      </p>
      <h3>Other Skills</h3>
      <p>
        Beyond coding, proficient in{" "}
        <span className="keyword">Adobe Photoshop</span>,{" "}
        <span className="keyword">Vegas Pro</span>, and{" "}
        <span className="keyword">Adobe Illustrator</span>.
      </p>
    </div>
  );
};

export default About;

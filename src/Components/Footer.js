import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Your Name</p>
      <ul>
        <li>
          <a href="https://github.com/ff1574">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/franko-fišter-b55621274">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:franko.fister@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

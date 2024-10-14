import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";
import "./Assets/CSS/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Tech />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;

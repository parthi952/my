import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Projects from "./components/Projects"
import About from "./components/about"
import Service from "./components/service"
import Contact from "../src/components/contacts"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function Portfolio() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <About />
        <Projects />
        <Service />
        <Contact />
      </div>
      <Footer />
    </div>
    
  );
}

export default Portfolio;
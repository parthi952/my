import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Projects from "./components/Projects"
import About from "./components/about"
import Service from "./components/service"
import Contact from "../src/components/contacts"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CanvasBackground from "./components/CanvasBackground"

function Portfolio() {
  return (
    <div className="portfolio-app">
      <CanvasBackground />
      <Navbar />
      <main className="content-container">
        <Home />
        <About />
        <Projects />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
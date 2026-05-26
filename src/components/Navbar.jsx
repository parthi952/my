import { useState, useEffect } from "react";
import { FaTerminal } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${active ? "active" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <FaTerminal className="brand-logo" />
        <span className="brand-name">PARTHEEPAN<span className="dot">.DEV</span></span>
        <span className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">Available</span>
        </span>
      </div>

      <div className="navbar-links">
        <a href="#Home" onClick={() => setActive(false)}>Home</a>
        <a href="#About" onClick={() => setActive(false)}>About</a>
        <a href="#Projects" onClick={() => setActive(false)}>Projects</a>
        <a href="#Service" onClick={() => setActive(false)}>Services</a>
        <a href="#Contact" onClick={() => setActive(false)} className="nav-cta">Let's Talk</a>
      </div>

      <div className="menu-toggle" onClick={() => setActive(!active)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;

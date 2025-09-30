
// import "/home/parthiban/Desktop/myportfo/portfo/src/style/nav.css"
import { useState, useEffect } from "react";

function Navbar() {
    const [active, setActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
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
            <a href="#Home" onClick={() => setActive(false)}>Home</a>
            <a href="#About" onClick={() => setActive(false)}>About</a>
            <a href="#Projects" onClick={() => setActive(false)}>Project</a>
            <a href="#Service" onClick={() => setActive(false)}>Service</a>
            <a href="#Contact" onClick={() => setActive(false)}>Contact</a>
            
            <div className="menu-toggle" onClick={() => setActive(!active)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;

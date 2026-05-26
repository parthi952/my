import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaChevronRight } from "react-icons/fa";

function Home() {
  const roles = ["Full-Stack Developer", "UI/UX Designer", "Python Automation Specialist", "Freelance Consultant"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);

      if (currentText === fullText) {
        // Hold before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="home" id="Home">
      <div className="home-container">
        <div className="left-section">
          <div className="badge-glow">🚀 Available for Projects</div>
          <div className="home-content">
            <h1 className="hero-title">
              PARTHEEPAN <span className="highlight-gradient">MURUGAN</span>
            </h1>
            <div className="role-typing-container">
              <span className="role-prefix">I am a </span>
              <span className="role-text">{currentText}</span>
              <span className="cursor-blink">|</span>
            </div>
            <p className="hero-tagline">
              Turning complex problems into elegant, performance-driven digital products. I design and code clean web apps, reliable automation scripts, and seamless user experiences.
            </p>
          </div>

          <div className="home-buttons">
            <a href="#Contact" className="btn btn-primary">
              Hire Me <FaChevronRight className="btn-icon" />
            </a>
            <a href="#Projects" className="btn btn-secondary">
              View Work
            </a>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/partheepan-murugan-accd4110" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/parthi952" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com/Parthi40099" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="right-section hero-visual">
          <div className="visual-wrapper">
            {/* Fully Animated Vector Developer Dashboard replacing standard image */}
            <svg
              className="dev-svg"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="neonCyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3a86ff" />
                  <stop offset="100%" stopColor="#8a2be2" />
                </linearGradient>
                <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff2e63" />
                  <stop offset="100%" stopColor="#8a2be2" />
                </linearGradient>
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Central Glowing Shield / Orb */}
              <circle
                cx="250"
                cy="250"
                r="140"
                fill="url(#neonCyanPurple)"
                fillOpacity="0.03"
                stroke="url(#neonCyanPurple)"
                strokeWidth="1.5"
                strokeDasharray="5, 5"
                className="orbit-slow"
              />
              <circle
                cx="250"
                cy="250"
                r="180"
                fill="none"
                stroke="url(#neonPink)"
                strokeWidth="1"
                strokeDasharray="15, 10"
                className="orbit-fast"
              />

              {/* Floating Terminal Code Editor Window */}
              <g className="floating-widget" transform="translate(40, 90)">
                {/* Window Body */}
                <rect
                  width="380"
                  height="260"
                  rx="16"
                  fill="#0c1020"
                  fillOpacity="0.9"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                  filter="drop-shadow(0 20px 40px rgba(0,0,0,0.5))"
                />
                
                {/* Header bar */}
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0H364C372.837 0 380 7.16344 380 16V40H0V16Z"
                  fill="#151b35"
                />
                {/* Window dots */}
                <circle cx="25" cy="20" r="6" fill="#ff5f56" />
                <circle cx="45" cy="20" r="6" fill="#ffbd2e" />
                <circle cx="65" cy="20" r="6" fill="#27c93f" />
                <text x="190" y="25" fill="#c0c0c0" fontSize="11" fontFamily="Courier" textAnchor="middle">
                  partheepan.js — editor
                </text>

                {/* Editor Content Lines */}
                <g transform="translate(25, 65)">
                  {/* Styled mock code lines with animations */}
                  <text x="0" y="15" fill="#8a2be2" fontSize="13" fontFamily="Monaco, Courier, monospace" fontWeight="600">const</text>
                  <text x="45" y="15" fill="#3a86ff" fontSize="13" fontFamily="Monaco, Courier, monospace">freelancer</text>
                  <text x="125" y="15" fill="#ffffff" fontSize="13" fontFamily="Monaco, Courier, monospace">= &#123;</text>

                  <text x="20" y="40" fill="#ff2e63" fontSize="13" fontFamily="Monaco, Courier, monospace">name:</text>
                  <text x="65" y="40" fill="#a78bfa" fontSize="13" fontFamily="Monaco, Courier, monospace">"Partheepan Murugan",</text>

                  <text x="20" y="65" fill="#ff2e63" fontSize="13" fontFamily="Monaco, Courier, monospace">skills:</text>
                  <text x="75" y="65" fill="#a78bfa" fontSize="13" fontFamily="Monaco, Courier, monospace">["React", "Python", "UX"],</text>

                  <text x="20" y="90" fill="#ff2e63" fontSize="13" fontFamily="Monaco, Courier, monospace">speed:</text>
                  <text x="75" y="90" fill="#27c93f" fontSize="13" fontFamily="Monaco, Courier, monospace">"100x",</text>

                  <text x="20" y="115" fill="#ff2e63" fontSize="13" fontFamily="Monaco, Courier, monospace">status:</text>
                  <text x="85" y="115" fill="#27c93f" fontSize="13" fontFamily="Monaco, Courier, monospace">"Available_For_Hire"</text>

                  <text x="0" y="140" fill="#ffffff" fontSize="13" fontFamily="Monaco, Courier, monospace">&#125;;</text>

                  {/* Pulsing Active Line Graphic */}
                  <rect x="0" y="155" width="220" height="20" rx="4" fill="rgba(58, 134, 255, 0.1)" stroke="rgba(58, 134, 255, 0.3)" />
                  <text x="10" y="169" fill="#3a86ff" fontSize="11" fontFamily="Monaco, Courier, monospace" className="pulse-text">&gt; deploy_production()</text>
                  <circle cx="205" cy="165" r="4" fill="#27c93f" className="pulse-glow" />
                </g>
              </g>

              {/* Floating tech element: React bubble */}
              <g className="floating-react" transform="translate(380, 60)" filter="url(#neonGlow)">
                <circle cx="35" cy="35" r="30" fill="#0d1117" stroke="#61dafb" strokeWidth="1.5" />
                <path d="M35 23C30 23 25 28 25 35C25 42 30 47 35 47C40 47 45 42 45 35C45 28 40 23 35 23Z" fill="none" stroke="#61dafb" strokeWidth="1" />
                <ellipse cx="35" cy="35" rx="22" ry="8" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(30 35 35)" />
                <ellipse cx="35" cy="35" rx="22" ry="8" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(90 35 35)" />
                <ellipse cx="35" cy="35" rx="22" ry="8" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(150 35 35)" />
                <circle cx="35" cy="35" r="3" fill="#61dafb" />
              </g>

              {/* Floating tech element: Python bubble */}
              <g className="floating-python" transform="translate(20, 310)" filter="url(#neonGlow)">
                <circle cx="35" cy="35" r="30" fill="#0d1117" stroke="#3776ab" strokeWidth="1.5" />
                <path
                  d="M35 15C29 15 25 18 25 24H30C30 22.5 32.5 21 35 21C37.5 21 40 22.5 40 24V27H35V30H45V24C45 18 41 15 35 15Z"
                  fill="#3776ab"
                />
                <path
                  d="M35 55C41 55 45 52 45 46H40C40 47.5 37.5 49 35 49C32.5 49 30 47.5 30 46V43H35V40H25V46C25 52 29 55 35 55Z"
                  fill="#ffd343"
                />
              </g>

              {/* Floating tech element: JS Bubble */}
              <g className="floating-js" transform="translate(410, 330)">
                <circle cx="30" cy="30" r="25" fill="#1e1e1e" stroke="#f7df1e" strokeWidth="1.5" />
                <rect x="18" y="18" width="24" height="24" rx="3" fill="#f7df1e" />
                <text x="37" y="38" fill="#000000" fontSize="16" fontFamily="Arial Black, Helvetica" fontWeight="900" textAnchor="end">JS</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
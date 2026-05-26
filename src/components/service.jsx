import { FaChevronRight } from "react-icons/fa";

function Service() {
  const content = [
    {
      title: "Web Development",
      description: "I build responsive, modern, and performance-driven web platforms tailored to your needs. From high-conversion landing pages to complex full-stack apps, I deliver clean code, secure frameworks, and complete frontend/backend orchestration.",
      svg: (
        <svg viewBox="0 0 120 120" className="service-svg-icon">
          <rect x="10" y="25" width="100" height="70" rx="8" fill="#151b35" stroke="#3a86ff" strokeWidth="2" />
          <line x1="10" y1="45" x2="110" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <circle cx="20" cy="35" r="3" fill="#ff5f56" />
          <circle cx="30" cy="35" r="3" fill="#ffbd2e" />
          <circle cx="40" cy="35" r="3" fill="#27c93f" />
          {/* Animated brackets */}
          <path d="M 35 60 L 25 70 L 35 80" stroke="#ff2e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="pulse-slow" />
          <path d="M 85 60 L 95 70 L 85 80" stroke="#ff2e63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="pulse-slow" />
          <line x1="65" y1="58" x2="55" y2="82" stroke="#8a2be2" strokeWidth="2.5" strokeLinecap="round" className="rotate-slow" />
        </svg>
      )
    },
    {
      title: "Mobile App Design",
      description: "In a mobile-first ecosystem, I engineer responsive smartphone user experiences. I design pixel-perfect layouts, intuitive navigation grids, and clean mobile flows that look stunning on iOS and Android devices.",
      svg: (
        <svg viewBox="0 0 120 120" className="service-svg-icon">
          <rect x="35" y="15" width="50" height="90" rx="10" fill="#151b35" stroke="#8a2be2" strokeWidth="2" />
          <circle cx="60" cy="23" r="2.5" fill="rgba(255,255,255,0.3)" />
          <rect x="42" y="32" width="36" height="56" rx="4" fill="#0d1117" />
          {/* Mock app components */}
          <circle cx="60" cy="46" r="8" fill="#3a86ff" className="pulse-slow" />
          <rect x="48" y="62" width="24" height="4" rx="2" fill="#ff2e63" />
          <rect x="52" y="70" width="16" height="4" rx="2" fill="#ffd343" />
          <circle cx="60" cy="97" r="4" fill="rgba(255,255,255,0.2)" />
        </svg>
      )
    },
    {
      title: "UI/UX Architecture",
      description: "Crafting digital experiences users love. I architect complete graphic frameworks, dynamic user journeys, sleek interactive wireframes, and harmonious color layouts that maximize retention and look incredibly premium.",
      svg: (
        <svg viewBox="0 0 120 120" className="service-svg-icon">
          <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3,3" />
          {/* Bezier Curve Node handles */}
          <path d="M 20 85 C 40 25, 80 25, 100 85" stroke="url(#bluePurpleGrad)" strokeWidth="3" fill="none" />
          <circle cx="20" cy="85" r="5" fill="#3a86ff" />
          <circle cx="100" cy="85" r="5" fill="#3a86ff" />
          
          <line x1="50" y1="42" x2="70" y2="42" stroke="#ff2e63" strokeWidth="1.5" />
          <circle cx="50" cy="42" r="4" fill="#ff2e63" className="floating-react" />
          <circle cx="70" cy="42" r="4" fill="#ff2e63" className="floating-python" />
          <circle cx="60" cy="42" r="3" fill="#fff" />
          
          <defs>
            <linearGradient id="bluePurpleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3a86ff" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Python Automation",
      description: "Tired of tedious spreadsheets and manuals? I design automated crawler pipelines, advanced PDF/Excel parser scripts, secure API microservices, and custom scheduler bots that turn labor-intensive jobs into instant operations.",
      svg: (
        <svg viewBox="0 0 120 120" className="service-svg-icon">
          {/* Gears spinning */}
          <g className="gear-container" transform="translate(60,60)">
            <g className="rotate-slow">
              <circle cx="0" cy="0" r="22" fill="#151b35" stroke="#1abc9c" strokeWidth="3" />
              <rect x="-6" y="-28" width="12" height="56" rx="2" fill="#1abc9c" />
              <rect x="-28" y="-6" width="56" height="12" rx="2" fill="#1abc9c" />
              <circle cx="0" cy="0" r="10" fill="#0d1117" />
            </g>
            <g className="rotate-fast" transform="translate(26, -26) scale(0.6)">
              <circle cx="0" cy="0" r="22" fill="#151b35" stroke="#ff2e63" strokeWidth="3" />
              <rect x="-6" y="-28" width="12" height="56" rx="2" fill="#ff2e63" />
              <rect x="-28" y="-6" width="56" height="12" rx="2" fill="#ff2e63" />
              <circle cx="0" cy="0" r="10" fill="#0d1117" />
            </g>
          </g>
        </svg>
      )
    },
    {
      title: "Custom AI Integration",
      description: "Leverage machine intelligence. I connect smart systems like Google Gemini, OpenAI, or localized NLTK classifiers into your product databases, powering contextual support desks, smart chat portals, or auto-categorization models.",
      svg: (
        <svg viewBox="0 0 120 120" className="service-svg-icon">
          {/* Rocket blasting off */}
          <g className="floating-react" transform="translate(10, -5)">
            <path d="M 60 25 C 50 40, 50 65, 52 80 L 68 80 C 70 65, 70 40, 60 25 Z" fill="#ffd343" stroke="#ff2e63" strokeWidth="2" />
            <path d="M 52 80 L 45 92 L 53 88 Z" fill="#ff2e63" />
            <path d="M 68 80 L 75 92 L 67 88 Z" fill="#ff2e63" />
            {/* Flame */}
            <path d="M 57 88 C 55 98, 65 98, 63 88 Z" fill="#ff5f56" className="pulse-glow" />
            <circle cx="60" cy="50" r="4" fill="#0d1117" />
          </g>
          <line x1="30" y1="105" x2="90" y2="105" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="Service" className="service-section">
      <div className="section-header">
        <h1>Services</h1>
        <p className="section-subtitle">What I offer — End-to-end digital solutions crafted for modern companies</p>
      </div>

      <div className="service-container">
        {content.map((item, index) => (
          <div className="service-item glass-card" key={index}>
            <div className="service-visual">
              {item.svg}
            </div>
            
            <div className="service-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="service-footer">
              <a href="#Contact" className="service-cta-link">
                Discuss Project <FaChevronRight className="arrow-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
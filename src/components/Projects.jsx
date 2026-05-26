import { FaGithub, FaCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "HRMS Enterprise Portal",
      description: "A comprehensive Human Resource Management System designed for modern agencies. Features an active payroll processing engine, real-time employee directories, shift tracking logs, and automated leave balance calculators.",
      tags: ["React", "FastAPI", "PostgreSQL", "Tailwind"],
      link: "https://github.com/parthi952", // Default placeholder for source
      svg: (
        <svg viewBox="0 0 400 240" className="project-svg">
          <rect width="100%" height="100%" fill="#0a0f1d" />
          
          {/* Dashboard grids */}
          <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="20" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          
          {/* Side navigation rail */}
          <rect x="25" y="45" width="45" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <circle cx="47" cy="65" r="6" fill="#3a86ff" />
          <rect x="37" y="85" width="20" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="37" y="100" width="20" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="37" y="115" width="20" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
          
          {/* Employee Directory Card Mock */}
          <g transform="translate(85, 45)">
            <rect width="280" height="120" rx="10" fill="rgba(13, 20, 48, 0.6)" stroke="rgba(58, 134, 255, 0.2)" strokeWidth="1.5" />
            
            {/* Header */}
            <text x="15" y="22" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">DEPARTMENT DIRECTORY</text>
            <text x="265" y="22" fill="#27c93f" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="end">Active</text>
            
            {/* Employee 1 */}
            <g transform="translate(15, 35)">
              <circle cx="15" cy="15" r="12" fill="rgba(58, 134, 255, 0.15)" stroke="#3a86ff" strokeWidth="1" />
              {/* Abstract avatar details */}
              <circle cx="15" cy="11" r="4" fill="#3a86ff" />
              <path d="M 8,22 Q 15,16 22,22 Z" fill="#3a86ff" />
              <text x="35" y="14" fill="#e2e8f0" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">Murugan P.</text>
              <text x="35" y="23" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Lead Software Architect</text>
              <rect x="180" y="8" width="70" height="14" rx="4" fill="rgba(26, 188, 156, 0.1)" stroke="rgba(26, 188, 156, 0.3)" />
              <text x="215" y="18" fill="#1abc9c" fontSize="8" fontFamily="monospace" textAnchor="middle">&gt; Payroll OK</text>
            </g>

            {/* Employee 2 */}
            <g transform="translate(15, 75)">
              <circle cx="15" cy="15" r="12" fill="rgba(138, 43, 226, 0.15)" stroke="#8a2be2" strokeWidth="1" />
              <circle cx="15" cy="11" r="4" fill="#8a2be2" />
              <path d="M 8,22 Q 15,16 22,22 Z" fill="#8a2be2" />
              <text x="35" y="14" fill="#e2e8f0" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">Sarah Connor</text>
              <text x="35" y="23" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Operations Specialist</text>
              <rect x="180" y="8" width="70" height="14" rx="4" fill="rgba(26, 188, 156, 0.1)" stroke="rgba(26, 188, 156, 0.3)" />
              <text x="215" y="18" fill="#1abc9c" fontSize="8" fontFamily="monospace" textAnchor="middle">&gt; Payroll OK</text>
            </g>
          </g>

          {/* Glowing bottom sync activity bar */}
          <rect x="25" y="195" width="350" height="25" rx="5" fill="#0d1117" />
          <circle cx="40" cy="207" r="4" fill="#ffd343" className="pulse-glow" />
          <text x="52" y="211" fill="#94a3b8" fontSize="9.5" fontFamily="monospace">&gt; HRMS_DB_Cluster synced: 24 active sessions</text>
        </svg>
      )
    },
    {
      title: "KiteCareer Chatbot",
      description: "A professional Python-based AI assistant that handles incoming client queries. It integrates Google Gemini AI with NLTK for high-accuracy semantic text tokenization and uses Pandas for structured data responses.",
      tags: ["Python", "Gemini API", "NLTK", "Pandas"],
      link: "https://github.com/parthi952/-KiteCareer-Chatbot.git",
      svg: (
        <svg viewBox="0 0 400 240" className="project-svg">
          <rect width="100%" height="100%" fill="#0a0f1d" />
          
          {/* Neon glow grids */}
          <line x1="20" y1="20" x2="380" y2="20" stroke="rgba(58,134,255,0.1)" strokeWidth="1" />
          <line x1="20" y1="60" x2="380" y2="60" stroke="rgba(58,134,255,0.1)" strokeWidth="1" />
          <line x1="20" y1="100" x2="380" y2="100" stroke="rgba(58,134,255,0.1)" strokeWidth="1" />
          <line x1="20" y1="140" x2="380" y2="140" stroke="rgba(58,134,255,0.1)" strokeWidth="1" />
          
          {/* Chat bubbles */}
          <g className="chat-bubble-1" transform="translate(30, 40)">
            <rect width="180" height="40" rx="10" fill="rgba(138, 43, 226, 0.15)" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="1" />
            <circle cx="20" cy="20" r="8" fill="#8a2be2" />
            <text x="35" y="24" fill="#e0e0e0" fontSize="11" fontFamily="sans-serif">Hi! How does Kite Career work?</text>
          </g>

          <g className="chat-bubble-2" transform="translate(190, 100)">
            <rect width="180" height="45" rx="10" fill="rgba(58, 134, 255, 0.15)" stroke="rgba(58, 134, 255, 0.4)" strokeWidth="1" />
            <circle cx="20" cy="22" r="8" fill="#3a86ff" />
            <path d="M 20 18 L 22 22 L 26 22 L 23 24 L 25 28 L 20 26 L 15 28 L 17 24 L 14 22 L 18 22 Z" fill="#fff" className="pulse-slow" />
            <text x="35" y="24" fill="#a78bfa" fontSize="10" fontWeight="bold" fontFamily="sans-serif">AI Chatbot Answer:</text>
            <text x="35" y="36" fill="#ffffff" fontSize="10" fontFamily="sans-serif">Connecting you to tech solutions...</text>
          </g>

          {/* Sparkles */}
          <circle cx="300" cy="40" r="3" fill="#ffd343" className="sparkle-1" />
          <circle cx="100" cy="170" r="2" fill="#3a86ff" className="sparkle-2" />
          <circle cx="350" cy="180" r="4" fill="#ff2e63" className="sparkle-3" />
          
          {/* Status bar */}
          <rect x="20" y="200" width="360" height="25" rx="5" fill="#0d1117" />
          <circle cx="35" cy="212" r="5" fill="#27c93f" className="pulse-glow" />
          <text x="48" y="216" fill="#a0aec0" fontSize="10" fontFamily="monospace">&gt; NLTK_Model initialized: Gemini_AI_Online</text>
        </svg>
      )
    },
    {
      title: "Flipkart Product Scraper",
      description: "An automated data extraction engine built in Python. Scrapes live e-commerce product listings, filters based on custom pricing criteria, and converts dynamic web sheets into clean downloadable Excel logs.",
      tags: ["Python", "BeautifulSoup", "Pandas", "Scraper"],
      link: "https://github.com/parthi952/Flipkart-Product-Scraper.git",
      svg: (
        <svg viewBox="0 0 400 240" className="project-svg">
          <rect width="100%" height="100%" fill="#0a0f1d" />
          
          {/* Grid line pattern */}
          <path d="M 20,40 L 380,40 M 20,80 L 380,80 M 20,120 L 380,120 M 20,160 L 380,160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          
          {/* Data Table Mockup */}
          <g transform="translate(30, 30)">
            {/* Headers */}
            <rect width="340" height="25" rx="4" fill="rgba(58, 134, 255, 0.2)" stroke="rgba(58, 134, 255, 0.4)" strokeWidth="1" />
            <text x="15" y="17" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">PRODUCT_NAME</text>
            <text x="190" y="17" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">LIVE_PRICE</text>
            <text x="280" y="17" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">STATUS</text>

            {/* Row 1 */}
            <g transform="translate(0, 35)" className="scraper-row-1">
              <rect width="340" height="25" rx="4" fill="rgba(255,255,255,0.02)" />
              <text x="15" y="16" fill="#c0c0c0" fontSize="9" fontFamily="monospace">Smart Watch OLED</text>
              <text x="190" y="16" fill="#ffd343" fontSize="9" fontFamily="monospace">$199.99</text>
              <text x="280" y="16" fill="#27c93f" fontSize="9" fontFamily="monospace">Scraped</text>
            </g>

            {/* Row 2 */}
            <g transform="translate(0, 68)" className="scraper-row-2">
              <rect width="340" height="25" rx="4" fill="rgba(255,255,255,0.02)" />
              <text x="15" y="16" fill="#c0c0c0" fontSize="9" fontFamily="monospace">Wireless Earbuds Pro</text>
              <text x="190" y="16" fill="#ffd343" fontSize="9" fontFamily="monospace">$89.50</text>
              <text x="280" y="16" fill="#27c93f" fontSize="9" fontFamily="monospace">Scraped</text>
            </g>

            {/* Row 3 */}
            <g transform="translate(0, 101)" className="scraper-row-3">
              <rect width="340" height="25" rx="4" fill="rgba(255,255,255,0.02)" />
              <text x="15" y="16" fill="#c0c0c0" fontSize="9" fontFamily="monospace">Mechanical Keyboard</text>
              <text x="190" y="16" fill="#ffd343" fontSize="9" fontFamily="monospace">$120.00</text>
              <text x="280" y="16" fill="#3a86ff" fontSize="9" fontFamily="monospace">Writing...</text>
            </g>
          </g>

          {/* Glowing extraction laser nodes */}
          <line x1="220" y1="30" x2="220" y2="180" stroke="#ff2e63" strokeWidth="1.5" strokeDasharray="5,5" className="laser-beam" />
          <circle cx="220" cy="110" r="6" fill="#ff2e63" filter="drop-shadow(0 0 5px #ff2e63)" className="laser-node" />

          {/* Export Stats */}
          <rect x="30" y="175" width="340" height="35" rx="6" fill="#0d1117" stroke="rgba(255,255,255,0.05)" />
          <path d="M 50,192 L 65,192 M 57,185 L 57,199" stroke="#1abc9c" strokeWidth="2" />
          <text x="80" y="196" fill="#1abc9c" fontSize="10" fontWeight="bold" fontFamily="monospace">Excel Sheet Generated: 542 Items Processed</text>
        </svg>
      )
    },
    {
      title: "Birthday Bot Automation",
      description: "An automated office daemon. Integrates Python file handlers to read birthdays from structured records, matches dates in real-time, and fires personalized glowing HTML emails using secure SMTP pipelines.",
      tags: ["Python", "SMTP", "Excel", "Automation"],
      link: "https://github.com/parthi952/Birthday-Bot-Chat.git",
      svg: (
        <svg viewBox="0 0 400 240" className="project-svg">
          <rect width="100%" height="100%" fill="#0a0f1d" />

          {/* Radar circle effect */}
          <circle cx="200" cy="110" r="70" fill="none" stroke="rgba(138,43,226,0.1)" strokeWidth="2" />
          <circle cx="200" cy="110" r="95" fill="none" stroke="rgba(138,43,226,0.05)" strokeWidth="1" />

          {/* Floating Envelopes */}
          <g className="mail-1" transform="translate(80, 50)">
            <rect width="32" height="20" rx="3" fill="#3a86ff" fillOpacity="0.8" />
            <path d="M 0,0 L 16,10 L 32,0" stroke="#fff" strokeWidth="1.5" fill="none" />
          </g>

          <g className="mail-2" transform="translate(290, 60)">
            <rect width="32" height="20" rx="3" fill="#ff2e63" fillOpacity="0.8" />
            <path d="M 0,0 L 16,10 L 32,0" stroke="#fff" strokeWidth="1.5" fill="none" />
          </g>

          {/* Animated Robot Face Vector in Center */}
          <g transform="translate(160, 70)" className="robot-head">
            <rect width="80" height="70" rx="15" fill="#151b35" stroke="url(#cyanPurpleGrad)" strokeWidth="2" />
            
            {/* Eyes */}
            <circle cx="25" cy="30" r="8" fill="#ffd343" className="robot-eye-left" />
            <circle cx="25" cy="30" r="3" fill="#000" />
            <circle cx="55" cy="30" r="8" fill="#ffd343" className="robot-eye-right" />
            <circle cx="55" cy="30" r="3" fill="#000" />

            {/* Mouth */}
            <rect x="25" y="48" width="30" height="6" rx="3" fill="#27c93f" className="robot-mouth" />
            
            {/* Antenna */}
            <line x1="40" y1="0" x2="40" y2="-15" stroke="#a78bfa" strokeWidth="3" />
            <circle cx="40" cy="-18" r="6" fill="#ff2e63" className="pulse-glow" />
          </g>

          <defs>
            <linearGradient id="cyanPurpleGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3a86ff" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
          </defs>

          {/* Output Log */}
          <rect x="30" y="180" width="340" height="30" rx="5" fill="#0d1117" />
          <text x="45" y="198" fill="#8a2be2" fontSize="9.5" fontFamily="monospace" fontWeight="bold">&gt; SMTP_Daemon: Success! Sending personal greetings...</text>
        </svg>
      )
    }
  ];

  return (
    <section id="Projects">
      <div className="section-header">
        <h1>My Projects</h1>
        <p className="section-subtitle">Real-world systems built for performance, reliability, and business impact</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card glass-card" key={index}>
            <div className="project-visual-container">
              {project.svg}
              <div className="visual-overlay">
                <FaCode className="overlay-icon" />
              </div>
            </div>

            <div className="project-info">
              <h2>{project.title}</h2>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-link"
                >
                  <FaGithub className="link-icon" /> View Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

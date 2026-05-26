import { FaClock, FaCheckCircle, FaBriefcase, FaAward } from "react-icons/fa";

function About() {
  const skills = [
    {
      name: "React",
      color: "#61DAFB",
      svg: (
        <svg viewBox="0 0 100 100" className="tech-icon-svg">
          <circle cx="50" cy="50" r="8" fill="#61DAFB" />
          <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 50 50)" />
        </svg>
      )
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      svg: (
        <svg viewBox="0 0 100 100" className="tech-icon-svg">
          <rect x="15" y="15" width="70" height="70" rx="10" fill="#F7DF1E" />
          <text x="75" y="77" fill="#000" fontSize="32" fontWeight="900" fontFamily="sans-serif" textAnchor="end">JS</text>
        </svg>
      )
    },
    {
      name: "Python",
      color: "#3776AB",
      svg: (
        <svg viewBox="0 0 100 100" className="tech-icon-svg">
          <path d="M50 10C30 10 28 16 28 24H38C38 21.5 42 20 50 20C58 20 62 21.5 62 24V34H38V44H62V54C62 62 58 64 50 64C42 64 38 62.5 38 60H28C28 68 30 74 50 74C70 74 72 68 72 60V50H62V40H72V30C72 16 70 10 50 10Z" fill="#3776AB" />
          <path d="M50 90C70 90 72 84 72 76H62C62 78.5 58 80 50 80C42 80 38 78.5 38 76V66H62V56H38V46C38 38 42 36 50 36C58 36 62 37.5 62 40H72C72 32 70 26 50 26C30 26 28 32 28 40V50H38V60H28V70C28 84 30 90 50 90Z" fill="#FFD343" />
        </svg>
      )
    },
    {
      name: "HTML5",
      color: "#E34F26",
      svg: (
        <svg viewBox="0 0 100 100" className="tech-icon-svg">
          <path d="M15 10 L85 10 L77 80 L50 90 L23 80 Z" fill="#E34F26" />
          <path d="M50 17 L78 17 L72 74 L50 82 Z" fill="#F06529" />
          <path d="M50 30 L34 30 L35 44 L50 44 Z M50 56 L36 56 L37 70 L50 75 Z" fill="#FFF" />
          <path d="M50 30 L66 30 L65 44 L50 44 Z M50 56 L64 56 L62 70 L50 75 Z" fill="#EBEBEB" />
        </svg>
      )
    },
    {
      name: "CSS3",
      color: "#1572B6",
      svg: (
        <svg viewBox="0 0 100 100" className="tech-icon-svg">
          <path d="M15 10 L85 10 L77 80 L50 90 L23 80 Z" fill="#1572B6" />
          <path d="M50 17 L78 17 L72 74 L50 82 Z" fill="#33A9DC" />
          <path d="M50 30 L34 30 L35 44 L50 44 Z M50 56 L36 56 L37 70 L50 75 Z" fill="#FFF" />
          <path d="M50 30 L66 30 L65 44 L50 44 Z M50 56 L64 56 L62 70 L50 75 Z" fill="#EBEBEB" />
        </svg>
      )
    },
    {
      name: "Figma",
      color: "#F24E1E",
      svg: (
        <svg viewBox="0 0 100 100" className="tech-icon-svg">
          <path d="M30 25 C30 14 39 5 50 5 C61 5 70 14 70 25 C70 36 61 45 50 45 C39 45 30 36 30 25 Z" fill="#FF7262" />
          <path d="M30 50 C30 39 39 30 50 30 C61 30 70 39 70 50 C70 61 61 70 50 70 C39 70 30 61 30 50 Z" fill="#A259FF" />
          <path d="M30 75 C30 64 39 55 50 55 C61 55 70 64 70 75 C70 86 61 95 50 95 C39 95 30 86 30 75 Z" fill="#1ABC9C" />
          <path d="M30 50 C30 39 39 30 50 30 L50 50 Z" fill="#F24E1E" />
          <path d="M30 75 C30 64 39 55 50 55 L50 75 Z" fill="#1ABC9C" />
        </svg>
      )
    },
    {
      name: "Photoshop",
      color: "#31A8FF",
      svg: (
        <svg viewBox="0 0 100 100" className="tech-icon-svg">
          <rect x="15" y="15" width="70" height="70" rx="10" fill="#001833" stroke="#31A8FF" strokeWidth="4" />
          <text x="32" y="65" fill="#31A8FF" fontSize="40" fontWeight="bold" fontFamily="sans-serif">P</text>
          <text x="56" y="65" fill="#31A8FF" fontSize="40" fontWeight="bold" fontFamily="sans-serif">s</text>
        </svg>
      )
    }
  ];

  const technicalSkills = [
    { category: "Web Development", level: 95, color: "#3a86ff", label: "ReactJS, ES6+, HTML5, CSS3, Tailwind" },
    { category: "Backend & Automation", level: 90, color: "#8a2be2", label: "Python, Web Scraping, Gemini API, Pandas" },
    { category: "UI/UX & Graphics Design", level: 85, color: "#ff2e63", label: "Figma, Adobe XD, Photoshop, wireframing" },
    { category: "System Support & Deploy", level: 80, color: "#1abc9c", label: "Git, Vercel, Hosting, Fast API integrations" }
  ];

  const stats = [
    { icon: <FaBriefcase />, value: "20+", label: "Projects Completed" },
    { icon: <FaCheckCircle />, value: "100%", label: "Client Satisfaction" },
    { icon: <FaClock />, value: "< 24h", label: "Response Time" },
    { icon: <FaAward />, value: "3+", label: "Years Programming" }
  ];

  return (
    <>
      <section className="about-section" id="About">
        <div className="about-container glass-card">
          <div className="about-header">
            <h2>About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-grid">
            <div className="about-left">
              <p className="bio-lead">
                Hi, I'm <span className="highlight">Partheepan Murugan</span> — a dedicated Freelance Developer & Digital Craftsman. I build modern, interactive, and high-performance applications designed to help clients grow their businesses.
              </p>

              <p>
                Whether you need a cutting-edge front-end build with <span className="highlight-text">React</span>, custom workflow bots and data collection structures using <span className="highlight-text">Python</span>, or stunning vector graphics from <span className="highlight-text">Figma</span>, I engineer fully customized solutions.
              </p>

              <p>
                My philosophy is simple: write robust code, build sleek interfaces, deliver projects on schedule, and prioritize client success above all else. Let's create something spectacular together.
              </p>

              {/* Freelancer Statistics Grid replacing Education */}
              <div className="freelancer-stats-grid">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-icon" style={{ color: i % 2 === 0 ? "#3a86ff" : "#8a2be2" }}>{stat.icon}</div>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-right">
              <div className="skills-meter-container">
                <h3>Design & Dev Core Strengths</h3>
                <div className="skills-gauge-list">
                  {technicalSkills.map((ts, index) => (
                    <div className="gauge-item" key={index}>
                      <div className="gauge-header">
                        <span className="gauge-title">{ts.category}</span>
                        <span className="gauge-percentage" style={{ color: ts.color }}>{ts.level}%</span>
                      </div>
                      <div className="gauge-track">
                        <div
                          className="gauge-fill"
                          style={{
                            width: `${ts.level}%`,
                            background: `linear-gradient(90deg, ${ts.color}, #a78bfa)`,
                            boxShadow: `0 0 10px ${ts.color}60`
                          }}
                        ></div>
                      </div>
                      <p className="gauge-details">{ts.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-header">
          <h2>My Tech Stack</h2>
          <p>Cutting-edge technologies I employ to construct perfect freelance solutions</p>
        </div>

        <div className="skills-scroll">
          <div className="scroll-wrapper">
            {skills.concat(skills).map((skill, index) => (
              <div className="scroll-item" key={index} style={{ borderColor: skill.color }}>
                <div className="skill-icon-wrapper" style={{ boxShadow: `0 0 15px ${skill.color}30` }}>
                  {skill.svg}
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
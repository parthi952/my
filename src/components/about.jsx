

import react from "../assets/scroll/icons8-react-80.png";
import js from "../assets/scroll/icons8-js-48.png";
import python from "../assets/scroll/icons8-python-48.png";
import html from "../assets/scroll/icons8-html-48.png";
import css from "../assets/scroll/icons8-css-100.png";
import figma from "../assets/scroll/icons8-figma-48.png";
import photoshop from "../assets/scroll/icons8-photoshop-48.png";

function About() {
    const skills = [
        { img: react, name: "React", color: "#61DAFB" },
        { img: js, name: "JavaScript", color: "#F7DF1E" },
        { img: python, name: "Python", color: "#3776AB" },
        { img: html, name: "HTML", color: "#E34F26" },
        { img: css, name: "CSS", color: "#1572B6" },
        { img: figma, name: "Figma", color: "#F24E1E" },
        { img: photoshop, name: "Photoshop", color: "#31A8FF" }
    ];
    const education = [
        {
            degree: "B.E., Computer Science and Engineering",
            institution: "Latha Mathavan Engineering College",
            year: "2022 – 2026",
            details: "CGPA: 7.1"
        },
        {
            degree: "HSC (Class XII)",
            institution: "P.K. Govt. Hr. Sec. School",
            year: "2018 – 2019",
            details: "Percentage: 45%"
        },
        {
            degree: "SSLC (Class X)",
            institution: "P.K. Govt. Hr. Sec. School",
            year: "2016 – 2017",
            details: "Percentage: 58.6%"
        }
    ];
    const technicalSkills = [
        {
            category: "Programming",
            skills: "Python (Pandas, NumPy, Matplotlib, NLP, SpaCy, smtplib, Gemini API)"
        },
        {
            category: "Web",
            skills: "HTML, CSS, JavaScript, ReactJS, Bootstrap, Material UI"
        },
        {
            category: "Design",
            skills: "Figma, Adobe XD, Photoshop, UI/UX Design"
        },
        {
            category: "Tech Support",
            skills: "Computer Hardware, MS Office"
        }
    ];

    return (
        <>
            <div className="about-section" id="About">
                <div className="about-container">
                    <div className="about-header">
                        <h1>About Me</h1>
                        <div className="title-underline"></div>
                    </div>
                    
                    <div className="about-content">
                        <p>
                            Hi, I'm <span className="highlight">Partheepan Murugan</span> — a dedicated Web Developer passionate about merging creativity with clean, efficient code. I build modern, responsive, and user-focused websites that turn ideas into reality.
                        </p>
                        
                        <p>
                            My expertise includes <span className="highlight">HTML, CSS, JavaScript, ReactJS, Python, UI/UX Design</span> and more. I thrive on solving challenges and constantly learning new technologies to expand my skill set. My goal is to deliver digital experiences that are both visually engaging and highly functional.
                        </p>
                        
                        <p>
                            Outside of coding, I enjoy exploring design trends, working on creative projects, and seeking opportunities for personal and professional growth.
                        </p>
                    </div>
                    {/* bio */}
                    <div className="bio">
                        <h2>Bio</h2>
                        <p>
                            I'm a passionate web developer with a strong foundation in front-end technologies. I love creating interactive and dynamic web applications that provide a seamless user experience.
                        </p>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <ul>
                            {education.map((edu, index) => (
                                <li key={index}>
                                    <h3>{edu.degree}</h3>
                                    <p>{edu.institution}</p>
                                    <p>{edu.year}</p>
                                    <p>{edu.details}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="technical-skills">
                        <h2>Technical Skills</h2>
                        <ul>
                            {technicalSkills.map((skill, index) => (
                                <li key={index}>
                                    <h3>{skill.category}</h3>
                                    <p>{skill.skills}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="skills-section">
                <div className="skills-header">
                    <h2>My Tech Stack</h2>
                    <p>Technologies I specialize in</p>
                </div>
                
                <div className="skills-scroll">
                    <div className="scroll-wrapper">
                        {skills.concat(skills).map((skill, index) => (
                            <div className="scroll-item" key={index} style={{ borderColor: skill.color }}>
                                <div className="skill-icon" style={{ backgroundColor: skill.color + '20' }}>
                                    <img src={skill.img} alt={skill.name} />
                                </div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

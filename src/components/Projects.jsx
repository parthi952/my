// import "/home/parthiban/Desktop/myportfo/portfo/src/style/project.css"


function Projects() {
    const projects = [
        {
            title: "KiteCareer-Chatbot",
            description: "📌 KiteCareer Chatbot 📖 Overview The KiteCareer Chatbot is a Python-based AI assistant designed to provide quick and friendly responses about the company’s details, services, and technologies. It integrates Google Generative AI (Gemini) with NLTK for text tokenization and Pandas for structured data handling.",
            image: "src/assets/chat.jpg",
            link: "https://github.com/parthi952/-KiteCareer-Chatbot.git"
        },
        {
            title: "Flipkart-Product-Scraper",
            description: "📌 Flipkart-Product-Scraper 📖 This Python project automates the process of scraping product information from Flipkart based on a search term. It retrieves data such as product names and prices, and organizes it into a structured Excel file for easy analysis.",
            image: "src/assets/flipkart.jpg",
            link: "https://github.com/parthi952/Flipkart-Product-Scraper.git"
        },
        {
            title: "Birthday-Bot-Chatbot",
            description: "📌 Birthday-Bot-Chatbot 📖 This Python bot reads from an Excel sheet, matches current dates to birthdays, and sends personalized email greetings automatically.",
            image: "src/assets/bot.jpg",
            link: "https://github.com/parthi952/Birthday-Bot-Chat.git"
        }
    ]

  

    return (
        <div id="Projects">
            <h1>My Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

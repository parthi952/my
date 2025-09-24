import "/home/parthiban/Desktop/myportfo/portfo/src/style/Service.css"

function Service() {
    const content = [
        {
            title: "🌐 Web Development",
            description: "I build modern, responsive, and performance-driven websites tailored to your needs. From sleek landing pages to full-fledged web applications, I ensure clean code, seamless functionality, and scalability. Whether it's frontend magic with ReactJS or backend logic with Python, I deliver complete web solutions."
        },
        {
            title: "📱 Mobile Development",
            description: "In today's mobile-first world, I design app interfaces that are visually appealing and highly functional. Every design is crafted with attention to detail, ensuring smooth user journeys and a delightful mobile experience."
        },
        {
            title: "🎨 UI/UX Design",
            description: "Designing experiences that users love. I focus on creating user-friendly interfaces with intuitive navigation, appealing layouts, and engaging interactions. My approach blends creativity with usability, ensuring that every design not only looks good but also works effortlessly."
        },
        {
            title: "🐍 Python Automation",
            description: "Repetitive tasks? Data overload? I create smart automation scripts and tools using Python to make life easier. From web scraping with BeautifulSoup, data analysis with Pandas, to automated email solutions, I turn complex processes into simple workflows."
        },
        {
            title: "⚡ Custom Projects",
            description: "Have a unique idea? I love challenges. Whether it's a smart food donation platform like Zero Hunger Alert, a chatbot, or a tailored digital solution, I can bring concepts to reality with innovation and precision."
        }
    ]

    return (
        <div id="Service">
            <h1>Service</h1>
            <h3>🚀 What I Offer</h3>
            <div className="service-container">
                {content.map((item, index) => (
                    <div className="service-item" key={index}>
                        <h4>
                            {item.title}
                            {item.subtitle && <span className="subtitle">{item.subtitle}</span>}
                        </h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
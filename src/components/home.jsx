import "/home/parthiban/Desktop/myportfo/portfo/src/style/home.css"
import im from "/home/parthiban/Desktop/myportfo/portfo/src/assets/IMG_20250801_133155.jpg";



function Home() {
    return (
        <div className="home" id="Home">
            <div className="left-section">
                <div className="home-content">
                    <h1>PARTHEEPAN MURUGAN</h1>
                    <p>A Full-Stack Developer</p>
                </div>
          <div className="social-icons">
              <a href="https://www.linkedin.com/in/partheepan-murugan-accd4110" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/parthi952" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" />
              </a>
              <a href="https://twitter.com/Parthi40099" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram" />
              </a>
          </div>
        </div>
        <div className="image">
        <img src={im} alt="Partheepan" />
      </div>
    </div>
    );
}
export default Home;
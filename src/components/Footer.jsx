import { FaArrowUp, FaEnvelope } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>PARTHEEPAN<span className="dot">.DEV</span></h3>
            <p>High-performance full-stack web platforms and custom python automation scripts built for modern enterprises.</p>
          </div>
          
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <a href="mailto:parthimp950@gmail.com" className="footer-email-link">
              <FaEnvelope className="email-icon" /> parthimp950@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Partheepan Murugan. All Rights Reserved.
          </p>
          <button 
            className="scroll-top-btn" 
            onClick={scrollToTop} 
            aria-label="Scroll back to top"
          >
            Back to top <FaArrowUp className="arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
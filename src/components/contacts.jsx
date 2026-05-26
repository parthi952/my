import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaEnvelope, FaPhoneAlt, FaComments, FaMapMarkerAlt, FaCheckDouble } from "react-icons/fa";

function Contact() {
  const contactDetails = {
    email: "parthimp950@gmail.com",
    phone: "+91 7540099101",
    location: "Madurai, Tamil Nadu, India",
    availability: "Immediate Status — Open for Freelance Contracts"
  };
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-container glass-card">
        <div className="contact-header">
          <h1>Let's Connect</h1>
          <p className="contact-subtitle">Skip the form — reach me directly for partnerships, projects, or consulting consultations.</p>
          <div className="title-underline"></div>
        </div>

        <div className="contact-hub-grid">

          {/* Main Direct Channels */}
          <div className="contact-channels">

            {/* Email Channel */}
            <a href={`mailto:${contactDetails.email}`} className="channel-card glass-card">
              <div className="channel-icon email"><FaEnvelope /></div>
              <div className="channel-body">
                <h3>Send an Email</h3>
                <p className="channel-value">{contactDetails.email}</p>
                <span className="channel-action">Click to write message &gt;</span>
              </div>
            </a>

            {/* Phone/WhatsApp Channel */}
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="channel-card glass-card">
              <div className="channel-icon phone"><FaPhoneAlt /></div>
              <div className="channel-body">
                <h3>Call / WhatsApp</h3>
                <p className="channel-value">{contactDetails.phone}</p>
                <span className="channel-action">Click to call or message &gt;</span>
              </div>
            </a>

            {/* Custom WhatsApp Chat link */}
            <a href="https://wa.me/7540099101" target="_blank" rel="noopener noreferrer" className="channel-card glass-card">
              <div className="channel-icon chat"><FaComments /></div>
              <div className="channel-body">
                <h3>Instant Chat</h3>
                <p className="channel-value">Ping me directly on WhatsApp</p>
                <span className="channel-action">Launch chat session &gt;</span>
              </div>
            </a>
          </div>

          {/* Freelancer Availability & Networks Panel */}
          <div className="contact-meta-panel glass-card">
            <h2>Contracting Status</h2>

            <div className="meta-list">
              <div className="meta-item">
                <FaCheckDouble className="meta-icon success" />
                <div>
                  <h4>Current Availability</h4>
                  <p>{contactDetails.availability}</p>
                </div>
              </div>

              <div className="meta-item">
                <FaMapMarkerAlt className="meta-icon location" />
                <div>
                  <h4>Base Location</h4>
                  <p>{contactDetails.location}</p>
                </div>
              </div>
            </div>

            <div className="networks-box">
              <h3>Professional Networks</h3>
              <div className="social-links-footer">
                <a href="https://www.linkedin.com/in/partheepan-murugan-accd4110" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/parthi952" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/Parthi40099" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
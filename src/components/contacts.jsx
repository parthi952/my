import React, { useEffect, useState } from "react";
// import "/home/parthiban/Desktop/myportfo/portfo/src/style/contact.css";
import axios from "axios";

function Contact() {
  const [contactInfo, setContactInfo] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Base URL for your FastAPI backend
  const API_BASE_URL = "https://port-backend-delta.vercel.app";

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const result = await axios.get(`${API_BASE_URL}/contact`);
        setContactInfo(result.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
        // Set fallback data if API fails
        setContactInfo({
          email: "your@email.com",
          phone: "+1234567890",
          message: "Contact me for opportunities"
        });
      }
    };
    fetchContactData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('');

    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', number: '', message: '' }); // Reset form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container" id="Contact">
      <h1>Contact Me</h1>
      

      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </label>

        <label>
          Your Email:
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </label>

        <label>
          Phone:
          <input 
            type="text" 
            name="number" 
            placeholder="Phone" 
            value={formData.number}
            onChange={handleChange}
            required 
          />
        </label>

        <label>
          Your Message:
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        <p>{submitStatus === 'success' ? 'Message sent successfully!' : submitStatus === 'error' ? 'Error sending message.' : ''}</p>
      </form>
      
      <div className="SI">
        <a href="https://www.linkedin.com/in/partheepan-murugan-accd4110" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/parthi952" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="GitHub" />
        </a>
        <a href="https://twitter.com/Parthi40099" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
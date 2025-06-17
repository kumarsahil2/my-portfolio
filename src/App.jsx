import React, { useEffect, useState } from "react";
import Loader from "./components/Loader"; // Import Loader
import ProjectCard from "./components/ProjectCard";
import "../src/styles/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fake loading for 2s, you can adjust as per real load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  if (loading) return <Loader />;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "75d2af9f-e69e-44f1-a310-265a5b1d6dbe", // Replace with your Web3Forms access key
        ...data,
      });

      if (response.data.success) {
        alert("Form submitted successfully!");
        event.target.reset(); // Reset the form
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };
  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Sahil's Portfolio</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#services">My skills & Journey</a>
          <a href="#certifications">Certificates</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero" data-aos="fade-up">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I’m <span className="highlight-name">Kumar Sahil</span> 👋
            </h1>
            <p className="subheading">
              Full-Stack Enthusiast | Backend Developer | MCA @ MIT Manipal
            </p>
            <p className="summary-line">
              🚀 Actively building scalable APIs, full-stack projects, ML
              integrations & real-world cloud deployments during my academic and
              internship experience.
            </p>
            <p className="experience-highlight">
              💼 Software Developer Intern @ Zieers System Pvt Ltd
            </p>

            <div className="buttons">
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1iJq9hTwZcDnZOmp6HuqaMR29pxN5C3s5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>

            <div className="social-icons">
              <a
                href="https://github.com/kumarsahil2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kumarsahil21/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="mailto:k.kumarsahil21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Email"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="./my2.jpeg" alt="Profile" />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills" data-aos="fade-up">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience" data-aos="fade-up">
        <h2>Currently Working At</h2>
        <h3>Zieers System Pvt Ltd — Software Developer Intern</h3>
        <ul className="experience-list">
          <li>
            ✓ Designed and developed AI-driven NIFTY 50 stock prediction
            dashboard using LSTM, sentiment analysis, and Angel One SmartAPI.
          </li>
          <li>
            ✓ Analyzed 5 years of historical data and implemented ML/DL models,
            boosting accuracy by 15%.
          </li>
          <li>
            ✓ Built full-stack React-Flask app with NewsAPI sentiment insights
            and 100% accurate documentation.
          </li>
        </ul>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="academics" data-aos="fade-up">
        <h2>Academic Background</h2>
        <div className="academic-cards">
          <div className="academic-card">
            <div className="academic-content">
              <h3>Master of Computer Applications</h3>
              <h4>Manipal Institute of Technology, Manipal</h4>
              <p>2023 - Present</p>
            </div>
            <div className="academic-logo">
              <img src="./manipallogo.jpg" alt="MIT Manipal" />
            </div>
          </div>

          <div className="academic-card">
            <div className="academic-content">
              <h3>B.Sc Information Technology</h3>
              <h4>Gaya College - Gaya</h4>
              <p>2018 - 2021</p>
            </div>
            <div className="academic-logo">
              <img src="./gayalogo.jpg" alt="Gaya College" />
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="certifications"
        data-aos="fade-up"
      >
        <h2>Certifications</h2>
        <ul className="certification-list">
          <li>
            <div className="cert-info">
              <h3>SQL Certificate</h3>
              <p>Hackerrank • 2024</p>
            </div>
            <a
              href="https://www.hackerrank.com/certificates/147a2afbc188"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Certificate
            </a>
          </li>

          <li>
            <div className="cert-info">
              <h3>Solutions Architecture </h3>
              <p>Forage • 2024</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1yFVUT5uSLNtYsin8PCYOP4GfWzv6PbvX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Certificate
            </a>
          </li>

          <li>
            <div className="cert-info">
              <h3>Rest API</h3>
              <p>Hackerrank • 2025</p>
            </div>
            <a
              href="https://www.hackerrank.com/certificates/59d10aa97a56"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Certificate
            </a>
          </li>
          <li>
            <div className="cert-info">
              <h3>Machine Learning with Apache Spark</h3>
              <p>Coursera • 2024</p>
            </div>
            <a
              href="https://coursera.org/share/81be78cd9e025b542150ed1753cf0858"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Certificate
            </a>
          </li>
        </ul>
      </section>

      {/* MY PROFILE SUMMARY */}
      <section id="services" className="services" data-aos="fade-up">
        <h2>My Journey & Skills</h2>
        <div className="cards">
          <ProjectCard
            title="Tech Stack Expertise"
            desc="Node.js, Express.js, React.js, MongoDB, MySQL, Firebase, PostgreSQL, Python, Java, C++, SQL, REST API design, JWT authentication, Secure Login flows."
          />

          <ProjectCard
            title="AI & ML Knowledge"
            desc="Built projects on LSTM models, Sentiment Analysis (TextBlob), Feature Engineering, BERT Model for Email Classification, PII Masking and FastAPI deployment."
          />

          <ProjectCard
            title="Full Stack Projects"
            desc="Hands-on experience in developing scalable full-stack applications such as Inventory Management System (MERN), and Stock Prediction Dashboard (React-Flask)."
          />

          <ProjectCard
            title="Academics & Research"
            desc="Pursuing MCA from MIT Manipal with strong fundamentals in backend, AI and ML; completed B.Sc IT with solid database & programming foundation."
          />

          <ProjectCard
            title="Cloud & Deployment Skills"
            desc="Experience deploying applications on Render; working with Hugging Face Spaces, API integrations, and cloud-based ML models."
          />

          <ProjectCard
            title="Personal Interests"
            desc="Outside of tech, I enjoy playing football & volleyball, following football leagues, and constantly learning emerging technologies in backend and AI."
          />
        </div>
      </section>

      <section id="projects" className="projects" data-aos="fade-up">
        <h2>Recent Projects</h2>
        <div className="project-gallery">
          {/* NIFTY 50 Predictor */}
          <div className="project-card">
            <div className="project-image-slider">
              <img src="./nifty1.png" alt="Nifty 50" />
              <img src="./nifty2.png" alt="Nifty 50" />
              <img src="./nifty3.png" alt="Nifty 50" />
            </div>
            <h3>NIFTY 50 Predictor (Ongoing)</h3>
            <p>LSTM, Flask, React, Sentiment, AngelOne SmartAPI, AWS</p>
            <br></br>
            <ul>
              <li>
                The NIFTY 50 Predictor forecasts stock prices using LSTM-based
                deep learning models combined with sentiment analysis from
                financial news.{" "}
              </li>
              <li>
                It integrates real-time stock data via Angel One SmartAPI and
                presents results through a React-Flask fullstack dashboard.
              </li>
            </ul>
            <a href="#" className="btn-secondary">
              View Details
            </a>
          </div>

          {/* Inventory Management System */}
          <div className="project-card">
            <div className="project-image-slider">
              <img src="./login.png" alt="Inventory 1" />
              <img src="./dash1.png" alt="Inventory 2" />
              <img src="./dash2.png" alt="Inventory 3" />
            </div>
            <h3>Inventory Management System</h3>
            <p>
              Full-stack MERN | Scalable APIs | Node.js, Express, MongoDB, React
              | JWT Auth
            </p>
            <br />
            <ul>
              {" "}
              <li>
                {" "}
                The Inventory Management System is a scalable full-stack MERN
                application to manage products, stock levels, sales and
                analytics.
              </li>
              <li>
                It provides secure user authentication, REST APIs, and real-time
                dashboard for efficient inventory tracking and reporting.
              </li>
            </ul>

            <a
              href="https://stock-management-phi-azure.vercel.app/"
              className="btn-secondary"
            >
              View Project
            </a>
          </div>

          {/* Email Classifier */}
          <div className="project-card">
            <div className="project-image-slider">
              <img src="./email3.png" alt="Email Classifier" />
              <img src="./email1.png" alt="Email Classifier" />
              <img src="./email2.png" alt="Email Classifier" />
            </div>
            <h3>Email Classifier</h3>
            <p>
              BERT Model | Hugging Face | FastAPI | PII Masking | Support Ticket
              Automation
            </p>
            <br></br>
            <ul>
              <li>
                The Email Classifier automatically categorizes customer support
                emails into predefined categories using BERT-based NLP models.
              </li>
              <li>
                It also masks sensitive personal information (PII) before
                processing, ensuring data privacy and secure handling.
              </li>
            </ul>
            <a
              href="https://huggingface.co/spaces/Kumarsahil21/email_classifier"
              className="btn-secondary"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" data-aos="fade-up">
        <div className="contact-wrapper">
          {/* LEFT SIDE — IMAGE + QUOTE */}
          <div className="contact-left">
            <img
              src="./coderboy.jpg"
              alt="Let's Talk"
              className="floating-img"
            />
            <p className="quote">"Let’s build something amazing together!"</p>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <div className="contact-form-box">
            <h2>Let's Connect</h2>
            <p>
              Have a question or project? Drop me a message and I’ll get back to
              you.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} Kumar Sahil |
        <a
          href="https://www.linkedin.com/in/kumarsahil21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/kumarsahil2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import FloatingSocialIcons from "../components/FloatingSocialIcons";
import "../App.css";

const Home = () => {
  return (
    <>
      <FloatingSocialIcons />
      <ScrollAnimation>
        <section className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-text">
              <h1>Nathanael Sjaklif</h1>
              <p className="hero-subtitle">
                Lab Assistant at SLC BINUS University
              </p>
              <p className="hero-role">Computer Science Student</p>
            </div>
            <div className="hero-image">
              <motion.div
                className="profile-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src="images/pfp.jpg" alt="Nathanael Sjaklif" />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="section">
          <div className="about-content">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                As a Junior Laboratory Assistant at BINUS University, I combine
                my passion for technology with hands-on problem-solving to
                support our academic community. My role involves leveraging a
                diverse skill set—including Node.js, OOP, Go, Python, SQL, and
                cloud technologies—to develop practical solutions that enhance
                learning and research.
              </p>
              <p>
                Currently pursuing my Computer Science degree (expected 2027),
                I'm committed to merging theoretical knowledge with real-world
                applications—whether through assisting students, optimizing lab
                tools, or contributing to open-source projects.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <h3>Education</h3>
                <p>Computer Science Student at BINUS University</p>
                <span className="highlight-year">EXPECTED 2027</span>
              </div>

              <div className="highlight-card">
                <h3>Current Role</h3>
                <p>Junior Laboratory Assistant at BINUS University</p>
                <span className="highlight-location">Jakarta, Indonesia</span>
              </div>

              <div className="highlight-card">
                <h3>Focus Areas</h3>
                <p>Full-stack Development, Android Apps, Machine Learning</p>
                <span className="highlight-tech">WEB • MOBILE • ML</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Home;

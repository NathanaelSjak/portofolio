import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import "../App.css";

const About = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: "/icons/email.svg",
      href: "mailto:nathanael.sjaklif@gmail.com?subject=Hello%20Nathanael",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "nathanael.sjaklif@gmail.com",
    },
    {
      name: "GitHub",
      icon: "/icons/github.svg",
      href: "https://github.com/NathanaelSjak",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      href: "https://www.linkedin.com",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Professional networking",
    },
    {
      name: "Location",
      icon: "/icons/location.svg",
      href: "#",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      description: "Jakarta, Indonesia",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <ScrollAnimation animation="fadeUp" delay={0.1}>
        <section className="hero">
          <h1>About Me</h1>
          <p>
            Passionate developer combining technology with hands-on
            problem-solving to support academic communities and create
            meaningful solutions.
          </p>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeUp" delay={0.2}>
        <section className="section">
          <div className="about-content">
            <div className="about-text">
              <h2>My Journey</h2>
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
              <ScrollAnimation animation="scale" delay={0.3}>
                <motion.div
                  className="highlight-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3>🎓 Education</h3>
                  <p>Computer Science Student at BINUS University</p>
                  <span className="highlight-year">Expected 2027</span>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" delay={0.4}>
                <motion.div
                  className="highlight-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3>💼 Current Role</h3>
                  <p>Junior Laboratory Assistant</p>
                  <span className="highlight-location">BINUS University</span>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" delay={0.5}>
                <motion.div
                  className="highlight-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3>🚀 Focus Areas</h3>
                  <p>Full-stack Development, Android Apps, Machine Learning</p>
                  <span className="highlight-tech">Web • Mobile • ML</span>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeUp" delay={0.3}>
        <section className="section">
          <h2>Let's Connect</h2>
          <p className="lead">
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="contact-blobs">
            {socialLinks.map((social, index) => (
              <ScrollAnimation
                key={social.name}
                animation="scale"
                delay={index * 0.1}
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-blob"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="blob-content">
                    <div className="blob-icon">
                      <img src={social.icon} alt={social.name} />
                    </div>
                    <div className="blob-text">
                      <h3>{social.name}</h3>
                      <p>{social.description}</p>
                    </div>
                  </div>
                  <div className="blob-shape"></div>
                </motion.a>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeUp" delay={0.4}>
        <section className="section">
          <div className="contact-info-card">
            <h2>Quick Stats</h2>
            <div className="contact-stats">
              <div className="stat">
                <span className="stat-number">7+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            <p>
              Always excited to discuss new projects, collaborations, or just
              chat about technology!
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </motion.div>
  );
};

export default About;

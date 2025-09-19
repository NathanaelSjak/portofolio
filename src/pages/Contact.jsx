import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Contact = () => {
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

  const blobVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container"
      style={{ paddingTop: "100px", minHeight: "100vh" }}
    >
      <motion.section className="section" variants={itemVariants}>
        <h1>Let's Connect</h1>
        <p className="lead">
          Have an opportunity, question, or just want to chat? I'd love to hear
          from you.
        </p>
      </motion.section>

      <motion.section className="section" variants={itemVariants}>
        <div className="contact-blobs">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={
                link.name !== "Email" && link.name !== "Location"
                  ? "_blank"
                  : undefined
              }
              rel={
                link.name !== "Email" && link.name !== "Location"
                  ? "noreferrer"
                  : undefined
              }
              className="social-blob"
              variants={blobVariants}
              whileHover="hover"
              style={{ background: link.color }}
            >
              <div className="blob-content">
                <div className="blob-icon">
                  <img src={link.icon} alt={link.name} />
                </div>
                <div className="blob-text">
                  <h3>{link.name}</h3>
                  <p>{link.description}</p>
                </div>
              </div>
              <div className="blob-shape"></div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section className="section" variants={itemVariants}>
        <div className="contact-info-card">
          <h2>Get in Touch</h2>
          <p>
            I'm always interested in new opportunities, collaborations, and
            interesting projects. Whether you have a question about my work,
            want to discuss a potential project, or just want to say hello, feel
            free to reach out!
          </p>
          <div className="contact-stats">
            <div className="stat">
              <span className="stat-number">24h</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Available</span>
            </div>
            <div className="stat">
              <span className="stat-number">Remote</span>
              <span className="stat-label">Work Ready</span>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;

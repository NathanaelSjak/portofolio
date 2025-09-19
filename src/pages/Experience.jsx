import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import SkillProgression from "../components/SkillProgression";
import "../App.css";

const Experience = () => {
  const experiences = [
    {
      title: "Lab Assistant",
      company: "SLC BINUS University",
      period: "2023 - Present",
      description:
        "Supporting students in computer science laboratories, assisting with programming assignments, and maintaining lab equipment and software.",
      skills: [
        "Teaching",
        "Technical Support",
        "Student Mentoring",
        "Lab Management",
      ],
      type: "work",
    },
    {
      title: "Fullstack Developer",
      company: "Spotify Clone Project",
      period: "2024",
      description:
        "Developed a complete music streaming application with React frontend, Go backend, PostgreSQL database, and AI-powered song recognition.",
      skills: [
        "React",
        "Go",
        "PostgreSQL",
        "AI/ML",
        "API Design",
        "Database Design",
      ],
      type: "project",
    },
    {
      title: "Android Developer",
      company: "Zone Lone App",
      period: "2024",
      description:
        "Led development of a sleep aid mobile application using Kotlin and Jetpack Compose, implementing audio playback and Firebase integration.",
      skills: [
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
        "Android",
        "MVVM",
        "Audio Processing",
      ],
      type: "project",
    },
    {
      title: "ML Engineer",
      company: "Phishing Detection System",
      period: "2025",
      description:
        "Built a machine learning system for email classification using Python, scikit-learn, and deployed as both web app and browser extension.",
      skills: [
        "Python",
        "scikit-learn",
        "Flask",
        "NLP",
        "Machine Learning",
        "Web Deployment",
      ],
      type: "project",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Vite",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Go",
        "Python",
        "Node.js",
        "REST APIs",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      category: "Mobile",
      items: ["Kotlin", "Jetpack Compose", "Android Studio", "XML", "Firebase"],
    },
    {
      category: "Database",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      category: "ML/AI",
      items: [
        "Python",
        "scikit-learn",
        "TensorFlow",
        "NLP",
        "Data Analysis",
        "Model Training",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "Docker",
        "Linux",
        "VSCode",
        "Figma",
        "Postman",
        "Railway",
      ],
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
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
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
        <h1>Experience & Skills</h1>
        <p className="lead">
          My journey in software development, from lab assistant to fullstack
          developer.
        </p>
      </motion.section>

      <motion.section className="section" variants={itemVariants}>
        <h2>Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item ${exp.type}`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ScrollAnimation animation="fadeUp" delay={0.2}>
        <SkillProgression />
      </ScrollAnimation>

      <motion.section className="section" variants={itemVariants}>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
              <motion.div
                className="skill-category"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </motion.section>

      <motion.section className="section" variants={itemVariants}>
        <h2>Education</h2>
        <motion.div
          className="education-card"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="education-header">
            <h3>Computer Science</h3>
            <div className="education-meta">
              <span className="institution">BINUS University</span>
              <span className="period">2023 - 2027</span>
            </div>
          </div>
          <p>
            Pursuing Bachelor's degree in Computer Science with focus on
            software engineering, machine learning, and mobile development.
            Active in competitive programming and student organizations.
          </p>
          <div className="education-highlights">
            <span className="highlight">GPA: 3.34/4.0</span>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Experience;

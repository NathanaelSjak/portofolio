import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillProgression = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    {
      name: "React",
      level: 90,
      color: "#61DAFB",
      icon: "⚛️",
      description: "Building dynamic UIs with hooks and modern patterns",
    },
    {
      name: "Go",
      level: 85,
      color: "#00ADD8",
      icon: "🐹",
      description: "High-performance backend services and APIs",
    },
    {
      name: "Python",
      level: 88,
      color: "#3776AB",
      icon: "🐍",
      description: "Machine learning and data analysis",
    },
    {
      name: "Kotlin",
      level: 82,
      color: "#7F52FF",
      icon: "📱",
      description: "Android development with Jetpack Compose",
    },
    {
      name: "PostgreSQL",
      level: 80,
      color: "#336791",
      icon: "🐘",
      description: "Database design and optimization",
    },
    {
      name: "Machine Learning",
      level: 75,
      color: "#FF6B6B",
      icon: "🤖",
      description: "NLP, classification, and model deployment",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="skill-progression"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2>Skill Progression</h2>
      <p className="lead">
        My journey from beginner to expert across different technologies
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={skillVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="skill-header">
              <div
                className="skill-icon"
                style={{ backgroundColor: skill.color }}
              >
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </div>

            <div className="skill-progress">
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillProgression;

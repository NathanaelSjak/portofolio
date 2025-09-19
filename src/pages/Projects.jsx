import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import FloatingSocialIcons from "../components/FloatingSocialIcons";
import "../App.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Spotify Clone",
      description:
        "A full-stack music streaming application with user authentication, playlist management, and real-time audio playback.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/nathanaelsjaklif/spotify-clone",
      image: "/screenshots/spotify-clone.svg",
      category: "Web",
      year: "2024",
    },
    {
      id: 2,
      title: "ZoneLone",
      description:
        "A sleep tracking mobile application that helps users monitor their sleep patterns and improve sleep quality.",
      technologies: ["React Native", "Firebase", "JavaScript"],
      github: "https://github.com/nathanaelsjaklif/zonelone",
      image: "/screenshots/zone-lone.svg",
      category: "Android",
      year: "2024",
    },
    {
      id: 3,
      title: "Neptune",
      description:
        "A weather forecasting application with detailed meteorological data and interactive maps.",
      technologies: ["React", "TypeScript", "Weather API"],
      github: "https://github.com/nathanaelsjaklif/neptune",
      image: "/screenshots/neptune.svg",
      category: "Web",
      year: "2023",
    },
    {
      id: 4,
      title: "Phishing Detection",
      description:
        "Machine learning model to detect phishing websites using various features and classification algorithms.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/nathanaelsjaklif/phishing-detection",
      image: "/screenshots/phishing-detection.svg",
      category: "ML",
      year: "2023",
    },
    {
      id: 5,
      title: "FitBuddy",
      description:
        "A fitness tracking application that helps users set goals, track workouts, and monitor progress.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/nathanaelsjaklif/fitbuddy",
      image: "/screenshots/fitbuddy.svg",
      category: "Web",
      year: "2023",
    },
    {
      id: 6,
      title: "Lichiko aoFa – Tribute Website",
      description:
        "A tribute website dedicated to Ichiko Aoba, featuring her music, biography, and discography.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/nathanaelsjaklif/lichiko-aofa",
      image: "/screenshots/lichiko-aofa.svg",
      category: "Web",
      year: "2023",
    },
    {
      id: 7,
      title: "SR Exam – Management System",
      description:
        "Exam management system to keep track of exams, students, proctors, and reports of cheating from students.",
      technologies: ["Rust", "React", "MySQL"],
      github: "https://github.com/nathanaelsjaklif/sr-exam",
      image: "/screenshots/sr-exam.svg",
      category: "Web",
      year: "2024",
    },
  ];

  const categoriesByProject = {
    Web: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Weather API",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Rust",
      "MySQL",
    ],
    Android: ["React Native", "Firebase", "JavaScript"],
    ML: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  };

  const filters = ["All", "Web", "Android", "ML"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <FloatingSocialIcons />
      <ScrollAnimation>
        <section className="section">
          <div className="projects-header">
            <h2>Selected Work</h2>
            <p>
              Here are some of my recent projects that showcase my skills and
              passion for technology.
            </p>
          </div>

          <div className="project-filters">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Projects;

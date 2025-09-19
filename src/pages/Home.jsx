import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import "../App.css";

const projects = [
  {
    title: "Spotify Clone (2024)",
    description:
      "A full-stack music streaming web app inspired by Spotify with Vite + React, Go, and PostgreSQL, plus AI-driven song title recognition.",
    tags: ["React", "Vite", "Go", "PostgreSQL", "AI"],
    image: "/screenshots/spotify-clone.svg",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/NathanaelSjak/spotify_clone",
      },
    ],
  },
  {
    title: "Zone Lone – Sleep Aid & Relaxation App (2024)",
    description:
      "Android app using Kotlin, Jetpack Compose, and Firebase for sleep improvement with ambient sounds, alarms, and stories.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    image: "/screenshots/zone-lone.svg",
    links: [
      { label: "GitHub", href: "https://github.com/NathanaelSjak/ZoneLone" },
    ],
  },
  {
    title: "NEPTUNE – Competitive Programming & Class Management (2025)",
    description:
      "Full-stack platform with Go, RabbitMQ, Judge0, React, Tailwind, and DaisyUI for contests and real-time evaluation.",
    tags: ["Go", "RabbitMQ", "Judge0", "React", "Tailwind"],
    image: "/screenshots/neptune.svg",
    links: [
      { label: "GitHub", href: "https://github.com/NathanaelSjak/neptune" },
    ],
  },
  {
    title: "Phishing Email Detection System (2025)",
    description:
      "ML-powered phishing vs legitimate email classifier with Python, scikit-learn, Flask, and Railway, delivered as a web app and browser extension.",
    tags: ["Python", "scikit-learn", "Flask", "Railway", "NLP"],
    image: "/screenshots/phishing-detection.svg",
    links: [
      {
        label: "ML Repo",
        href: "https://github.com/NathanaelSjak/PhisingClassifierML",
      },
      {
        label: "Extension",
        href: "https://github.com/Tesdv/phishnet_extension",
      },
      { label: "Flask API", href: "https://github.com/Tesdv/phishnet_flask" },
    ],
  },
  {
    title: "FitBuddy – Fitness Companion App (2025)",
    description:
      "Mobile fitness app with Kotlin, Firebase, and XML for scheduling workouts, progress tracking, and guided videos.",
    tags: ["Kotlin", "Firebase", "XML"],
    image: "/screenshots/fitbuddy.svg",
    links: [{ label: "GitHub", href: "https://github.com/Aldriczz/FitBuddy" }],
  },
  {
    title: "Lichiko aoFa – Tribute Website (2024)",
    description:
      "A beautiful tribute website dedicated to Ichiko Aoba, featuring her music and artistic journey. Built with pure HTML, CSS, and JavaScript for optimal performance and accessibility.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/screenshots/lichiko-aofa.svg",
    links: [
      { label: "Live Demo", href: "https://lichiko-aofa.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/NathanaelSjak/lichiko-aofa",
      },
    ],
  },
  {
    title: "SR Exam – Management System (2024)",
    description:
      "Comprehensive exam management system built with Rust backend and React frontend. Tracks exams, students, proctors, and generates detailed cheating reports with MySQL database integration.",
    tags: ["Rust", "React", "MySQL"],
    image: "/screenshots/sr-exam.svg",
    links: [
      { label: "GitHub", href: "https://github.com/NathanaelSjak/sr-exam" },
    ],
  },
];

const Home = () => {
  const [filter, setFilter] = useState("All");

  const categoriesByProject = useMemo(
    () => ({
      Web: [
        "React",
        "Vite",
        "Go",
        "PostgreSQL",
        "Tailwind",
        "HTML",
        "CSS",
        "JavaScript",
        "Rust",
      ],
      Android: ["Kotlin", "Jetpack Compose", "XML"],
      ML: ["Python", "scikit-learn", "Flask", "NLP"],
    }),
    []
  );

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => {
      const cats = categoriesByProject[filter] || [];
      return p.tags.some((t) => cats.includes(t));
    });
  }, [filter, categoriesByProject]);

  // Animation variants
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
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <ScrollAnimation animation="fadeUp" delay={0.1}>
        <section className="hero">
          <h1>Building practical software across Web, Android, and ML</h1>
          <p>
            I am a lab assistant at SLC BINUS University and a developer focused
            on full‑stack web apps, Android experiences, and applied machine
            learning. I enjoy turning ideas into fast, reliable products.
          </p>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeUp" delay={0.2}>
        <section className="section" id="projects">
          <div className="projects-header">
            <h2>SELECTED WORKS</h2>
            <p className="lead">Recent work I'm proud of</p>
          </div>

          <ScrollAnimation animation="fadeUp" delay={0.3}>
            <div className="project-filters">
              {["All", "Web", "Android", "ML"].map((c) => (
                <motion.button
                  key={c}
                  className={`filter-btn ${filter === c ? "active" : ""}`}
                  onClick={() => setFilter(c)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {c}
                </motion.button>
              ))}
            </div>
          </ScrollAnimation>

          <div className="projects-grid">
            <AnimatePresence mode="wait">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`project-item ${
                    index % 3 === 0 ? "featured" : ""
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  layout
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-year">2024</span>
                      <span className="project-category">
                        {project.tags[0]}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </ScrollAnimation>
    </motion.div>
  );
};

export default Home;

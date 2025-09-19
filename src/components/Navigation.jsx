import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navigation = ({ theme, setTheme }) => {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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

  const themeVariants = {
    light: { rotate: 0 },
    dark: { rotate: 180 },
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Project" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.nav className="nav-pill" variants={itemVariants}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </Link>
            ))}
            <a
              href="/Nathanael_Sjaklif_Resume.pdf"
              download
              className="nav-item resume-item"
            >
              Resume
            </a>
          </motion.nav>

          <motion.div className="nav-controls" variants={itemVariants}>
            <motion.span
              className="toggle"
              onClick={() =>
                setTheme((t) => (t === "light" ? "dark" : "light"))
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`switch ${theme === "light" ? "on" : ""}`}
                variants={themeVariants}
                animate={theme === "light" ? "light" : "dark"}
                transition={{ duration: 0.3 }}
              >
                <span className="knob" />
              </motion.span>
              {theme === "light" ? "Light" : "Dark"}
            </motion.span>
          </motion.div>
        </div>
      </motion.header>

      <motion.button
        aria-label="Scroll to top"
        className={`button scroll-top ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showTop ? 1 : 0,
          scale: showTop ? 1 : 0.8,
          y: showTop ? 0 : 8,
        }}
        transition={{ duration: 0.2 }}
      >
        ↑ Top
      </motion.button>
    </>
  );
};

export default Navigation;

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Renders a full-screen SVG wave that rises to cover the screen, then reveals the new page
// Uses theme CSS variables for colors to match light/dark schemes
const PageWaveTransition = () => {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);
  const [isActive, setIsActive] = useState(false);

  const overlayVariants = {
    initial: { opacity: 1 },
    enter: { opacity: 1 },
    exit: { opacity: 1 },
  };

  // Trigger only on real route changes (skip initial mount)
  useEffect(() => {
    if (previousPathRef.current !== location.pathname) {
      setIsActive(true);
      const timeoutId = setTimeout(() => setIsActive(false), 1400);
      previousPathRef.current = location.pathname;
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={location.pathname}
          className="page-wave-overlay"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={overlayVariants}
        >
          <motion.div
            className="page-wipe"
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, transformOrigin: "top" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageWaveTransition;

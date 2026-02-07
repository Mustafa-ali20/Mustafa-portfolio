import React from "react";
import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  // Give the component a display name
  const TransitionComponent = () => (
    <>
      <OgComponent />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="slide-in"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          background: "#0f0f0f",
          transformOrigin: "bottom",
          zIndex: 9999,
        }}
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="slide-out"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          background: "#0f0f0f",
          transformOrigin: "top",
          zIndex: 9999,
        }}
      />
    </>
  );

  // Set display name for debugging
  TransitionComponent.displayName = `Transition(${OgComponent.displayName || OgComponent.name || 'Component'})`;
  
  return TransitionComponent;
};

export default Transition;
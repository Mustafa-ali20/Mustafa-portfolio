import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/pages/Home";
import Projects from "./Components/pages/Projects";
import About from "./Components/pages/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/pages/Contact";
import Lenis from "lenis";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      mouseMultiplier: 2,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#121315] w-full min-h-screen">
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;

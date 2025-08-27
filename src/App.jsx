import React, { useRef, useEffect } from "react";
import Home from "./Components/content/Home";
import Projects from "./Components/content/Projects";
import About from "./Components/content/About";
import Navbar from "./Components/Navbar"; // Import the navbar
import Contact from "./Components/content/Contact";
import Lenis from 'lenis'

function App() {
  
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Initialize Lenis smooth scroll with custom options
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,        // How long the scroll animation takes (higher = slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      mouseMultiplier: 2,   // Mouse wheel scroll speed (higher = faster)
      touchMultiplier: 2,   // Touch scroll speed (higher = faster)
      wheelMultiplier: 1,   // Wheel scroll speed (higher = faster)
      smoothTouch: false,   // Enable smooth scroll on touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const targetRef = refs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  

  return (
    <div className="bg-[#121315] w-full">
      {/* Navbar with scroll function */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Sections with refs */}
      <div ref={homeRef} id="home">
        <Home />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>

      <div ref={aboutRef} id="about">
        <About />
      </div>

      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
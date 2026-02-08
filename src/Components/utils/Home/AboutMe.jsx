import React, { useEffect, useRef } from "react";
import "./AboutMe.css";
import { useNavigate } from "react-router-dom";
import DecryptedText from "../../animation/DecryptedText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const textItemsRef = useRef([]);
  const imageRef = useRef(null); // New ref for image

  const descriptionLines = [
    "HI, I'M MUSTAFA - A CREATIVE FRONTEND DEVELOPER.",
    "MY FOCUS IS ON BUILDING SLEEK, ANIMATED, AND IMMERSIVE EXPERIENCES",
    "THAT TRANSFORM SIMPLE WEBSITES INTO SOMETHING EXTRAORDINARY.",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const textItems = textItemsRef.current.filter(Boolean);
    const image = imageRef.current;

    if (!section || textItems.length === 0 || !image) return;

    // Set initial state for all text items
    gsap.set(textItems, {
      yPercent: -100, // Start above container (clipped by overflow)
    });

    // Set initial state for image - start smaller
    gsap.set(image, {
      scale: 0.7, // Start at 70% of original size
      transformOrigin: "center center", // Scale from center
    });

    // Configuration
    const overlapFactor = 0.35; // Overlap between reveals

    // Create main timeline that starts EARLY
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%", // ✓ Start EARLY - when section is 70% down viewport
        end: "+=60%", // Extended scroll to cover early start + pinned duration
        scrub: 1,
        // markers: { startColor: "blue", endColor: "cyan" },
      },
    });

    // Add all 5 text items to timeline with overlap
    textItems.forEach((item, index) => {
      tl.to(
        item,
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.out",
        },
        index * overlapFactor // Continuous overlap
      );
    });

    // Add image scale animation to the SAME timeline
    // It should start at the beginning and finish at the end
    tl.to(
      image,
      {
        scale: 1, // Scale to original size (100%)
        duration: textItems.length * overlapFactor + 1, // Match total text animation duration
        ease: "power2.out",
      },
      0 // Start at position 0 (same time as first text)
    );

    // Separate pin trigger that activates when section reaches top
    ScrollTrigger.create({
      trigger: section,
      start: "top", // Pin when section reaches full viewport
      end: "+=60%", // Stay pinned for remainder of animation
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      //markers: { startColor: "green", endColor: "red" },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="about-me" ref={sectionRef}>
      {/* Main Content */}
      <main className="main-content">
        {/* Background Text - Left Side */}
        <div className="bg-text-left">
          <div className="bg-text-wrapper overflow-hidden">
            <div
              className="bg-text-item"
              ref={(el) => (textItemsRef.current[0] = el)}
            >
              FUNDAM
            </div>
          </div>
          <div className="bg-text-wrapper overflow-hidden">
            <div
              className="bg-text-item"
              ref={(el) => (textItemsRef.current[1] = el)}
            >
              ENTALS
            </div>
          </div>
        </div>

        {/* Background Text - Right Side */}
        <div className="bg-text-right">
          <div className="bg-text-wrapper overflow-hidden">
            <div
              className="bg-text-item"
              ref={(el) => (textItemsRef.current[2] = el)}
            >
              OF WEB
            </div>
          </div>
          <div className="bg-text-wrapper overflow-hidden">
            <div
              className="bg-text-item"
              ref={(el) => (textItemsRef.current[3] = el)}
            >
              DEVELOP
            </div>
          </div>
          <div className="bg-text-wrapper overflow-hidden">
            <div
              className="bg-text-item"
              ref={(el) => (textItemsRef.current[4] = el)}
            >
              MENT
            </div>
          </div>
        </div>

        {/* Center Portrait */}
        <div className="portrait-container">
          <div className="portrait">
            {/* Placeholder for the portrait image */}
            <div className="portrait-placeholder">
              <img
                ref={imageRef}
                className="w-full h-full object-scale-down object-top select-none"
                src="/Images/Mustafa.png"
                alt="Mustafa"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="description">
          {descriptionLines.map((line, index) => (
            <p key={index} className="description-line">
              <DecryptedText
                text={line}
                animateOn="view"
                maxIterations={1}
                speed={40}
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
              />
            </p>
          ))}
        </div>

        <button onClick={() => navigate("/about")} className="cta-button">
          ABOUT ME
        </button>
      </main>
    </div>
  );
};

export default AboutMe;
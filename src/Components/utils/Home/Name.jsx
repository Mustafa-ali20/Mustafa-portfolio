import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Loader from "../../animation/Loader";
import ColorBends from "../../animation/ColorBends";

gsap.registerPlugin(ScrollTrigger);

function Name() {
  const textRef = useRef(null);
  const hiTextRef = useRef(null);
  const backgroundTextRef = useRef(null);

  useGSAP(() => {
    // Initial bottom-to-top entrance animation for all text elements (happens only once)
    gsap.set([backgroundTextRef.current, hiTextRef.current], {
      y: 100,
      opacity: 0,
    });

    gsap.to([backgroundTextRef.current, hiTextRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 4,
      stagger: 0.2,
    });

    // SCROLL-TRIGGERED SCALE ANIMATION for background text
    ScrollTrigger.create({
      trigger: backgroundTextRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const scale = 1 + self.progress * 0.5;
        gsap.set(backgroundTextRef.current, {
          scale: scale,
          transformOrigin: "center center",
        });
      },
      onLeave: () => {
        gsap.to(backgroundTextRef.current, {
          scale: 1.5,
          duration: 0.1,
          ease: "power2.out",
        });
      },
      onEnterBack: () => {
        gsap.set(backgroundTextRef.current, { scale: 1 });
      },
    });

    // Letter reveal animation for "Turning Concepts into Code"
    if (!textRef.current) return;

    // Process each span separately to preserve responsive layout
    const spanElements = textRef.current.querySelectorAll("span");

    spanElements.forEach((span) => {
      let clutter = "";
      const splittedText = span.textContent.split("");

      splittedText.forEach(function (char) {
        if (char === " ") {
          clutter += `<span>&nbsp;</span>`;
        } else {
          clutter += `<span style="opacity: 0">${char}</span>`;
        }
      });

      span.innerHTML = clutter;
    });

    const spans = textRef.current.querySelectorAll("span span");

    // Create ScrollTrigger for re-triggering animation with wider trigger zone
    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%", // Start earlier when element is barely in view
      end: "bottom -30%", // End much later, well after element leaves viewport
      onEnter: () => {
        gsap.fromTo(
          spans,
          { opacity: 0 },
          {
            opacity: 1,
            delay: 4.4,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
          },
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          spans,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
          },
        );
      },
      onLeave: () => {
        gsap.to(spans, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(spans, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  });

   return (
    <div className="h-screen relative">
      {/* <Loader /> */}
      
      {/* ColorBends Background - z-0, receives mouse events */}
      <div className="absolute inset-0 opacity-50 z-0">
        <ColorBends
          colors={["#d4d4d4", "#737373", "#262626"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          color="#5a5a5a"
        />
      </div>

      {/* Content Layer - z-10, pointer-events-none */}
      <div className="text-white relative overflow-hidden pointer-events-none z-10">
        
        {/* Background "MUSTAFA" text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-x-hidden">
          <h1
            ref={backgroundTextRef}
            className="text-[#1E1F21] opacity-90 font-[random] leading-[0.8] text-[35vw] sm:text-[18vw] md:text-[15vw] lg:text-[13vw] text-center"
          >
            <span className="hidden sm:inline">MUSTAFA</span>
            <div className="block sm:hidden">
              <div className="transform -translate-x-8">MU</div>
              <div className="transform translate-x-8">STU</div>
            </div>
          </h1>
        </div>

        {/* Foreground content */}
        <div className="relative z-5 flex items-center justify-center min-h-screen">
          <div className="text-center select-none px-4 pointer-events-auto">
            <p
              ref={hiTextRef}
              className="text-[7.3vw] sm:text-5xl md:text-6xl lg:text-7xl font-[light] mb-3 sm:mb-2"
            >
              Hi, I'm Mustafa
            </p>
            <p
              ref={textRef}
              className="text-[12.5vw] sm:text-4xl md:text-5xl lg:text-9xl font-[britanica-bold] leading-none mb-10"
            >
              <span className="block sm:inline">Turning Concepts</span>
              <span className="block sm:inline"> into Code*</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Name;

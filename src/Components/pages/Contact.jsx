import React, { useEffect, useRef } from "react";
import { Send, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { gsap } from "gsap";
import PixelBlast from "../animation/PixelBlast";

function Footer() {
  const emailAddress = "mustafaramakda61@gmail.com";

  // Refs for button animations
  const gmailButtonRef = useRef(null);
  const gradientCircleRef = useRef(null);
  const scheduleButtonRef = useRef(null);
  const whiteOverlayRef = useRef(null);

  // Initialize Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "breif-meeting" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Gmail Button - Gradient Follower Animation
    if (gmailButtonRef.current && gradientCircleRef.current) {
      const button = gmailButtonRef.current;
      const circle = gradientCircleRef.current;

      const generateGradient = () => {
        const colors = [
          ["#FF6B6B", "#4ECDC4"],
          ["#667eea", "#764ba2"],
          ["#f093fb", "#f5576c"],
          ["#4facfe", "#00f2fe"],
          ["#43e97b", "#38f9d7"],
          ["#ff9a9e", "#fecfef"],
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };

      const handleMouseEnter = (e) => {
        const [color1, color2] = generateGradient();
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.set(circle, {
          background: `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`,
          opacity: 0,
          scale: 0,
          left: x,
          top: y,
          xPercent: -50,
          yPercent: -50,
        });

        gsap.to(circle, {
          opacity: 0.7,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(circle, {
          left: x,
          top: y,
          duration: 0.05,
          ease: "none",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(circle, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  // Gmail redirect logic
  const handleGmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <footer className="relative h-[75vh] lg:min-h-screen bg-[#121315] text-white overflow-hidden">
      {/* PixelBlast Background Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#5a5a5a"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[75vh] lg:min-h-screen px-4 py-16">
  

        {/* Main Name */}
        <div className="text-center mb-8 md:mb-12">
          <div className="text-6xl md:text-8xl lg:text-9xl font-[semibold] tracking-tighter leading-none mb-4">
            MUSTAFA ALI
          </div>
        </div>

        {/* Social Links - Horizontal on desktop, stacked on mobile */}
        <div className="flex md:flex-row gap-17 md:gap-37 mb-6 md:mb-8 text-sm md:text-base font-[regular]">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-400 transition-colors text-center"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/mustafaaa.ali/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-400 transition-colors text-center"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/+96599806987"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-400 transition-colors text-center"
          >
            WhatsApp
          </a>
        </div>

        {/* Buttons - Side by side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 md:mb-20 px-4">
          {/* Gmail Button */}
          <button
            ref={gmailButtonRef}
            onClick={handleGmailClick}
            className="group bg-white text-black w-82 md:flex-1 h-12 rounded-full font-bold text-sm md:text-md font-[regular] hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            <div
              ref={gradientCircleRef}
              className="absolute w-20 h-20 rounded-full pointer-events-none blur-sm opacity-0"
              style={{ mixBlendMode: "multiply" }}
            />
            <Send
              size={18}
              className="group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform duration-300 ease-out relative z-10"
            />
            <span className="relative z-10 text-xs md:text-sm">
              {emailAddress}
            </span>
          </button>
        </div>

        {/* Tagline */}
        <div className="text-2xl md:text-5xl lg:text-[6rem] font-[medium] text-white/40 mb-16 md:mb-20 text-center tracking-tight">
          CREATIVE FRONTEND DEVELOPER
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full lg:max-w-[85vw] gap-6 md:gap-0 text-xs md:text-sm text-zinc-300 font-[light] px-4 bg-red-00">
          {/* Left: Copyright */}
          <div className="text-center md:w-1/3 md:text-left md:text-[1vw] lg:text-[0.6vw]">
            2025 .All right reserved. Mustafa Ali
            <br className="lg:hidden" />
            <span className="block ">
              Any reproduction, distribution, or use of the materials without
              permission is prohibited.
            </span>
          </div>

          {/* Right: Website Design Credit */}
          <div className="text-center text-[light] md:text-right">
            <span className="block md:inline">WEBSITE DESIGN - </span>
             MUSTAFA ALI
          </div>

          {/* FNSH Button - Desktop only, positioned at bottom right */}
          <button className="hidden md:flex items-center justify-center gap-2 px-6 py-2 border border-zinc-600 rounded-full hover:bg-gray-800 transition-colors text-xs font-[light]">
            <span>fnsh</span>
            <span className="text-lg">•</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
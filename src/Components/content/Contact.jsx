import React, { useEffect, useRef } from "react";
import { Send, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const emailAddress = "mustafaramakda61@gmail.com";

  // Refs for animations
  const subheadingRef = useRef(null);
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
  useGSAP(() => {
    // Gmail Button - Gradient Follower Animation
      if (gmailButtonRef.current && gradientCircleRef.current) {
      const button = gmailButtonRef.current;
      const circle = gradientCircleRef.current;
      
      // Generate random gradient colors (avoiding yellows/limes)
      const generateGradient = () => {
        const colors = [
          ['#FF6B6B', '#4ECDC4'], // Red to teal
          ['#667eea', '#764ba2'], // Blue to purple  
          ['#f093fb', '#f5576c'], // Pink to coral
          ['#4facfe', '#00f2fe'], // Blue to cyan
          ['#43e97b', '#38f9d7'], // Green to mint
          ['#ff9a9e', '#fecfef'], // Coral to light purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };

      const handleMouseEnter = (e) => {
        const [color1, color2] = generateGradient();
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Set initial position immediately on enter
        gsap.set(circle, { 
          background: `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`,
          opacity: 0,
          scale: 0,
          left: x,
          top: y,
          xPercent: -50, // Center the circle on the cursor
          yPercent: -50
        });
        
        gsap.to(circle, {
          opacity: 0.7,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(circle, {
          left: x,
          top: y,
          duration: 0.05, // Even faster response for smoother tracking
          ease: "none" // Linear movement for precise following
        });
      };

      const handleMouseLeave = () => {
        gsap.to(circle, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
  
    }

    // Schedule Button - White Overlay Slide Animation
    if (scheduleButtonRef.current && whiteOverlayRef.current) {
      const button = scheduleButtonRef.current;
      const overlay = whiteOverlayRef.current;
      const text = button.querySelector('.button-text');
      const icon = button.querySelector('.button-icon');

      // Set initial state
      gsap.set(overlay, { 
        y: '100%',
        borderRadius: '70% 70% 0 0' // Organic curve at top
      });

      const handleMouseEnter = () => {
        gsap.to(overlay, {
          y: '0%',
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to([text, icon], {
          color: '#000000',
          duration: 0.2,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(overlay, {
          y: '100%',
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to([text, icon], {
          color: '#ffffff',
          duration: 0.2,
          ease: "power2.out"
        });
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    }

    // Letter reveal animation for subheading using your working pattern
    if (!subheadingRef.current) return;

    // Find all exclamation marks and set them initially hidden
    const allExclamations = subheadingRef.current.querySelectorAll('.exclamation-mark');
    gsap.set(allExclamations, { opacity: 0 });

    // Process each span separately to preserve layout
    const spanElements = subheadingRef.current.querySelectorAll("span.animate-text");

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

    const spans = subheadingRef.current.querySelectorAll("span.animate-text span");

    // Create ScrollTrigger for text animation
    ScrollTrigger.create({
      trigger: subheadingRef.current,
      start: "top 95%",
      end: "bottom -40%",
      onEnter: () => {
        gsap.fromTo(
          spans,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
            onComplete: () => {
              // First reveal all exclamation marks
              gsap.to(allExclamations, {
                opacity: 1,
                duration: 0.3,
                onComplete: () => {
                  // Then start blinking animation for all exclamation marks
                  gsap.to(allExclamations, {
                    opacity: 0.4,
                    duration: 1.2,
                    ease: "power2.inOut",
                    yoyo: true,
                    repeat: -1,
                  });
                }
              });
            },
          }
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          spans,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(allExclamations, {
                opacity: 1,
                duration: 0.3,
                onComplete: () => {
                  gsap.to(allExclamations, {
                    opacity: 0.4,
                    duration: 1.2,
                    ease: "power2.inOut",
                    yoyo: true,
                    repeat: -1,
                  });
                }
              });
            },
          }
        );
      },
      onLeave: () => {
        gsap.killTweensOf([spans, allExclamations]);
        gsap.to(spans, { opacity: 0, duration: 0.3 });
        gsap.to(allExclamations, { opacity: 0, duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.killTweensOf([spans, allExclamations]);
        gsap.set(spans, { opacity: 0 });
        gsap.set(allExclamations, { opacity: 0 });
      },
    });
  });

  // Gmail redirect logic
  const handleGmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="h-[70vh] sm:h-[60vh] text-white flex items-center justify-center px-4 pb-30">
      <div className="max-w-4xl w-full text-center">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-[bold] mb-6 leading-tight tracking-tight">
          {/* Desktop: Single Line */}
          <span className="hidden sm:block">
            Slide into my inbox{" "}
            <span className="inline-block animate-bounce duration-[3000ms] transition-all">
              👀
            </span>
          </span>

          {/* Mobile: Split into lines */}
          <span className="sm:hidden">
            Slide into my
            <br />
            inbox{" "}
            <span className="inline-block animate-bounce duration-[3000ms]">
              👀
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-[#6d6d6d]"
        >
          {/* Desktop: Single Line */}
          <span className="hidden sm:block font-[medium]">
            Let's turn{" "}
            <i className="text-[#888888]">
              <span className="animate-text">"just an idea"</span>
            </i>{" "}
            into damn, that's{" "}
            <i className="text-[#a1a1a1] uppercase">
              <span className="animate-text">brilliant</span>
            </i>
            <span className="text-[#a1a1a1] uppercase exclamation-mark">
              <i>!</i>
            </span>
          </span>

          {/* Mobile: Split into two balanced lines */}
          <span className="sm:hidden font-[medium] text-[4vw] leading-none">
            Let's turn{" "}
            <i>
              <span className="animate-text">"just an idea"</span>
            </i>
            <br />
            into damn, that's{" "}
            <i>
              <span className="animate-text uppercase">brilliant</span>
            </i>
            <span className="exclamation-mark"><i>!</i></span>
          </span>
        </p>

        <div className="space-y-4 flex flex-col items-center max-w-md mx-auto">
          {/* Gmail Button with Gradient Follower */}
          <button
            ref={gmailButtonRef}
            onClick={handleGmailClick}
            className="group bg-[#DDFF00] text-black w-82 h-12 rounded-full font-bold text-md font-[regular] hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            {/* Gradient Circle Follower */}
            <div
              ref={gradientCircleRef}
              className="absolute w-20 h-20 rounded-full pointer-events-none blur-sm opacity-0"
              style={{ mixBlendMode: 'multiply' }}
            />
            
            {/* Button Content */}
            <Send
              size={20}
              className="group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform duration-300 ease-out relative z-10"
            />
            <span className="relative z-10">{emailAddress}</span>
          </button>

          {/* Schedule Call Button with White Overlay Slide */}
          <button
            ref={scheduleButtonRef}
            data-cal-namespace="breif-meeting"
            data-cal-link="mustafa-aly/breif-meeting"
            data-cal-config='{"layout":"month_view"}'
            className="w-50 h-11 bg-zinc-800 text-white rounded-full font-[light] text-md hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            {/* White Overlay */}
            <div
              ref={whiteOverlayRef}
              className="absolute inset-0 bg-white"
            />
            
            {/* Button Content */}
            <Calendar size={17} className="button-icon relative z-10 transition-colors duration-400" />
            <span className="button-text relative z-10 transition-colors duration-400">Schedule a call</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
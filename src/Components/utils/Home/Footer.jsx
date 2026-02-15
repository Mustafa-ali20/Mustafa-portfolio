import React, { useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import PixelBlast from "../../animation/PixelBlast";
import "./Footer.scss";
import DecryptedText from "../../animation/DecryptedText";

function Footer() {
  const emailAddress = "mustafaramakda61@gmail.com";

  // Refs for button animations
  const gmailButtonRef = useRef(null);
  const gradientCircleRef = useRef(null);

  // Initialize Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "breif-meeting" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // GSAP Animations for button
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

  // Animation variants
  const nameVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // Smooth easing
      },
    },
  };

  const linksContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger each link
        delayChildren: 0.35, // Start when name is 40-45% done (0.8s * 0.4 ≈ 0.35s)
      },
    },
  };

  const linkVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.6, // Start shortly after links begin
      },
    },
  };

  return (
    <footer className="footer">
      {/* PixelBlast Background Effect */}
      <div className="footer__background">
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
      <div className="footer__content">
        {/* Main Name - Animated */}
        <div className="footer__name-wrapper">
          <motion.h1
            className="footer__name selection:bg-zinc-100 selection:text-[#121315]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={nameVariants}
          >
            MUSTAFA ALI
          </motion.h1>
        </div>

        {/* Social Links - Animated */}
        <motion.nav
          className="footer__social selection:bg-zinc-100 selection:text-[#121315]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={linksContainerVariants}
        >
          <div className="footer__social-link-wrapper">
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              variants={linkVariants}
            >
              LinkedIn
            </motion.a>
            <motion.div
              className="footer__social-underline"
              variants={underlineVariants}
            />
          </div>

          <div className="footer__social-link-wrapper">
            <motion.a
              href="https://instagram.com/mustafaaa.ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              variants={linkVariants}
            >
              Instagram
            </motion.a>
            <motion.div
              className="footer__social-underline"
              variants={underlineVariants}
            />
          </div>

          <div className="footer__social-link-wrapper">
            <motion.a
              href="https://wa.me/+96599806987"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              variants={linkVariants}
            >
              WhatsApp
            </motion.a>
            <motion.div
              className="footer__social-underline"
              variants={underlineVariants}
            />
          </div>
        </motion.nav>

        {/* Gmail Button - Animated */}
        <motion.button
          ref={gmailButtonRef}
          onClick={handleGmailClick}
          className="footer__button"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={buttonVariants}
        >
          <div ref={gradientCircleRef} className="footer__button-gradient" />
          <Send size={18} className="footer__button-icon" />
          <span className="footer__button-text">{emailAddress}</span>
        </motion.button>

        {/* Main Tagline - Single Line, Fluid Width */}
        <div className="footer__tagline selection:bg-zinc-100 selection:text-[#121315]">
          <DecryptedText
            text="CREATIVE FRONTEND DEVELOPER"
            animateOn="view"
            encryptedClassName="text-[rgba(255, 255, 255, 0.57)]"
            className="text-[rgba(255, 255, 255, 0.57)]"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={true}
          />
        </div>

        {/* Bottom Credits - Matches Tagline Width */}
        <div className="footer__bottom selection:bg-zinc-100 selection:text-[#121315]">
          <div className="footer__bottom-copyright">
            <div className="footer__bottom-copyright-line">
              <span className="footer__bottom-year">2025.</span>
              <span className="footer__bottom-text">
                All right reserved. Mustafa Ali
              </span>
            </div>
            <span className="footer__bottom-disclaimer">
              Any reproduction, distribution, or use of the materials without
              permission is prohibited.
            </span>
          </div>

          <div className="footer__bottom-credit">
            <span className="footer__bottom-label">WEBSITE DESIGN -</span>
            <span className="footer__bottom-designer">MUSTAFA ALI</span>
          </div>

          <button className="footer__bottom-button">
            <span>fnsh</span>
            <span className="footer__bottom-button-dot">•</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
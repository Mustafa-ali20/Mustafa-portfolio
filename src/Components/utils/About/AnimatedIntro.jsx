import { useEffect, useRef, useState } from "react";
import "./AnimatedIntro.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "../../animation/DecryptedText";

gsap.registerPlugin(ScrollTrigger);

// ── Line reveal hook (from Intro component) ──────────────────────────
const useLineReveal = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const raf = requestAnimationFrame(() => {
      const text = el.innerText;
      const words = text.split(" ");

      // Rebuild element with span-wrapped words to measure
      el.innerHTML = words
        .map(
          (w) =>
            `<span class="gsap-word" style="display:inline-block;white-space:pre">${w} </span>`,
        )
        .join("");

      const wordEls = el.querySelectorAll(".gsap-word");
      const lineGroups = [];
      let currentLine = [];
      let currentTop = null;

      wordEls.forEach((wordEl) => {
        const top = Math.round(wordEl.getBoundingClientRect().top);
        if (currentTop === null) currentTop = top;

        if (top > currentTop + 4) {
          lineGroups.push(currentLine);
          currentLine = [wordEl];
          currentTop = top;
        } else {
          currentLine.push(wordEl);
        }
      });
      if (currentLine.length) lineGroups.push(currentLine);

      // Wrap each line group in an overflow-hidden div
      el.innerHTML = "";
      lineGroups.forEach((group) => {
        const wrapper = document.createElement("div");
        wrapper.style.cssText = "overflow:hidden; display:block;";

        const inner = document.createElement("div");
        inner.className = "gsap-line";
        inner.style.cssText = "display:block; will-change:transform;";
        inner.textContent = group.map((w) => w.textContent.trimEnd()).join(" ");

        wrapper.appendChild(inner);
        el.appendChild(wrapper);
      });

      // Animate with GSAP + ScrollTrigger
      const lines = el.querySelectorAll(".gsap-line");

      gsap.fromTo(
        lines,
        { y: "110%" },
        {
          y: "0%",
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    return () => {
      cancelAnimationFrame(raf);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars?.trigger === ref.current) t.kill();
      });
    };
  }, [ref]);
};

// ── Circular text SVG ─────────────────────────────────────────────────
function CircleText({
  r,
  text,
  fontSize = 14,
  letterSpacing = 5,
  rotationRef,
}) {
  const circumference = 2 * Math.PI * r;
  const charWidth = fontSize * 0.6 + letterSpacing;
  const needed = Math.ceil(circumference / charWidth);
  const unit = text + "                              ";
  const repeated = unit.repeat(Math.ceil(needed / unit.length) + 1);
  const pathId = `cp-${r}`;
  const size = r * 2 + 48;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      ref={rotationRef}
      className="circle-svg"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d={`M ${cx},${cy - r} a ${r},${r} 0 1,1 -0.001,0`} />
      </defs>
      <text className="circle-text-path" style={{ fontSize, letterSpacing }}>
        <textPath href={`#${pathId}`}>{repeated}</textPath>
      </text>
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { y: "105%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ── Main component ────────────────────────────────────────────────────
export default function AnimatedIntro() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0, ready: false });

  // Refs for paragraph animations
  const smallParagraphRef = useRef(null);
  const paraSmRef = useRef(null);

  // Apply line reveal to paragraphs
  useLineReveal(smallParagraphRef);
  useLineReveal(paraSmRef);

  // Per-ring SVG refs for direct DOM rotation (no re-render)
  const outerRingRef = useRef(null);
  const midRingRef = useRef(null);
  const innerRingRef = useRef(null);

  // Rotation accumulator refs
  const rotations = useRef({ outer: 0, mid: 0, inner: 0 });
  const velocity = useRef(0); // eased current velocity
  const targetVel = useRef(0); // raw scroll input
  const lastScrollY = useRef(0);
  const rafRef = useRef(null);

  // ── Circle position measurement ──────────────────────────────────
  useEffect(() => {
    const update = () => {
      if (!imageRef.current || !containerRef.current) return;
      requestAnimationFrame(() => {
        if (!imageRef.current || !containerRef.current) return;
        const imgRect = imageRef.current.getBoundingClientRect();
        const contRect = containerRef.current.getBoundingClientRect();
        setCirclePos({
          top: imgRect.top - contRect.top + imgRect.height / 2,
          left: imgRect.left - contRect.left + imgRect.width / 2,
          ready: true,
        });
      });
    };

    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  // ── Scroll-based rotation ────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      targetVel.current = delta * 0.35;
      lastScrollY.current = currentY;
    };

    const tick = () => {
      velocity.current += (targetVel.current - velocity.current) * 0.1;
      targetVel.current *= 0.82;

      rotations.current.outer += velocity.current * 0.09;
      rotations.current.mid += velocity.current * 0.13;
      rotations.current.inner += velocity.current * 0.17;

      if (outerRingRef.current) {
        outerRingRef.current.style.transform = `translate(-50%, -50%) rotate(${rotations.current.outer}deg)`;
      }
      if (midRingRef.current) {
        midRingRef.current.style.transform = `translate(-50%, -50%) rotate(${rotations.current.mid}deg)`;
      }
      if (innerRingRef.current) {
        innerRingRef.current.style.transform = `translate(-50%, -50%) rotate(${rotations.current.inner}deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const outerText =
    "FRONTEND DEV ✦ CREATIVE ✦ 2026 ✦ FRONTEND DEV ✦ CREATIVE ✦ ";
  const midText = " FRONT END DEV ✦ CREATIVE ✦ 21 ✦ FRONT END ✦ ";
  const innerText = "DEV ✦ CREATIVE ✦ 21 ✦ 05 ";

  return (
    <div className="animated-intro">
      <div className="grain-overlay" aria-hidden="true" />

      {/* ════════════════════════════════════════
          LARGE SCREEN  (≥ 1024px)
      ════════════════════════════════════════ */}
      <div className="intro-large" ref={containerRef}>
        {/* ── Circular text rings ── */}
        {circlePos.ready && (
          <div
            className="circle-system"
            style={{ top: circlePos.top, left: circlePos.left }}
            aria-hidden="true"
          >
            <CircleText
              r={380}
              text={outerText}
              fontSize={22}
              letterSpacing={4}
              rotationRef={outerRingRef}
            />
            <CircleText
              r={340}
              text={midText}
              fontSize={22}
              letterSpacing={4}
              rotationRef={midRingRef}
            />
            <CircleText
              r={300}
              text={innerText}
              fontSize={22}
              letterSpacing={4}
              rotationRef={innerRingRef}
            />
          </div>
        )}

        {/* ── Main heading ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="main-heading"
        >
          <div className="overflow-hidden">
            <motion.span variants={lineVariants} className="heading-line">
              THE WORLD OF RHYTHM AND FLOW
            </motion.span>
          </div>
          
          <span className="heading-line heading-line-2">
            <span className="overflow-hidden inline-block">
              <motion.span variants={lineVariants} className="inline-block">
                SHAPED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </motion.span>
            </span>
            <img
              ref={imageRef}
              src="/Images/Me2.jpg"
              alt="Profile"
              className="center-image"
            />
            <span className="overflow-hidden inline-block">
              <motion.span variants={lineVariants} className="inline-block">
                MY UNDERSTANDING OF
              </motion.span>
            </span>
          </span>
          
          <div className="overflow-hidden">
            <motion.span variants={lineVariants} className="heading-line">
              CREATIVITY —
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span variants={lineVariants} className="heading-line">
              AS MOVEMENT. TIMING. AND EMOTION.
            </motion.span>
          </div>
        </motion.div>

        {/* ── Small paragraph with line reveal ── */}
        <p ref={smallParagraphRef} className="small-paragraph">
          LATER, I GOT INTRODUCED TO WEB DEVELOPMENT, AND I REALIZED IT WAS
          THE PERFECT SPACE WHERE TECHNOLOGY MEETS ARTISTRY.
        </p>
      </div>

      {/* ════════════════════════════════════════
          SMALL / MEDIUM SCREEN  (< 1024px)
      ════════════════════════════════════════ */}
      <div className="intro-small">
        {/* 7-line heading with animations */}
        <motion.div 
          className="heading-sm" 
          aria-label="Main heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>THE WORLD OF RHYTHM A</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>ND FLOW</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>SHAPED MY UNDERSTANDI</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>NG OF</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>CREATIVITY —</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>AS MOVEMENT, TIMING, AN</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>D EMOTION.</motion.div>
          </div>
        </motion.div>

        <div className="image-para-row">
          <div className="image-placeholder image-placeholder-sm">
            <img
              src="/Images/Me2.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Paragraph with line reveal */}
          <p ref={paraSmRef} className="para-sm">
            LATER, I GOT INTRODUCED TO WEB DEVELOPMENT, AND I REALIZED IT WAS
            THE PERFECT SPACE WHERE TECHNOLOGY MEETS ARTISTRY.
          </p>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useRef, useState } from "react";
import "./AnimatedIntro.scss";

// ── Circular text SVG ─────────────────────────────────────────────────
// Static (no rotation). Rings are closer together: r = 190, 140, 95.
// Bigger font for readability; letter-spacing tightened slightly.
function CircleText({ r, text, fontSize = 14, letterSpacing = 5 }) {
  const circumference = 2 * Math.PI * r;
  const charWidth = fontSize * 0.6 + letterSpacing;
  const needed = Math.ceil(circumference / charWidth);
  const unit = text + "     "; // sentence gap (spaces)
  const repeated = unit.repeat(Math.ceil(needed / unit.length) + 1);
  const pathId = `cp-${r}`;
  const size = r * 2 + 48;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg className="circle-svg" width={size} height={size} aria-hidden="true">
      <defs>
        <path id={pathId} d={`M ${cx},${cy - r} a ${r},${r} 0 1,1 -0.001,0`} />
      </defs>
      <text className="circle-text-path" style={{ fontSize, letterSpacing }}>
        <textPath href={`#${pathId}`}>{repeated}</textPath>
      </text>
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────
export default function AnimatedIntro() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0, ready: false });

  // Recalculate circle center whenever image moves (resize)
  useEffect(() => {
    const update = () => {
      if (!imageRef.current || !containerRef.current) return;

      // Use rAF to ensure browser has finished flex layout before measuring
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

    // Also watch the container itself for any layout shifts (e.g. font load)
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);

    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  // Ring text content — gaps via trailing spaces in CircleText
  const outerText = "FRONTEND DEV ✦ CREATIVE ✦ 2026 ✦ FRONTEND DEV ✦ CREATIVE";
  const midText = "FRONT END DEV ✦ CREATIVE ✦ 21 ✦ FRONT END";
  const innerText = "DEV ✦ CREATIVE ✦ 21 ✦ 05";

  return (
    <div className="animated-intro">
      <div className="grain-overlay" aria-hidden="true" />

      {/* ════════════════════════════════════════
          LARGE SCREEN  (≥ 1024px)
      ════════════════════════════════════════ */}
      <div className="intro-large" ref={containerRef}>
        {/* ── Circular text rings — absolutely placed on image center ── */}
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
            />
            <CircleText
              r={340}
              text={midText}
              fontSize={22}
              letterSpacing={4}
            />
            <CircleText
              r={300}
              text={innerText}
              fontSize={22}
              letterSpacing={4}
            />
          </div>
        )}

        {/* ── Main heading — right-aligned ── */}
        <div className="main-heading">
          {/* Image is absolutely positioned over line 2 — outside text flow */}

          <span className="heading-line">THE WORLD OF RHYTHM AND FLOW</span>
          <span className="heading-line heading-line-2">
            <span>SHAPED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img
              ref={imageRef}
              src="/Images/Me2.jpg"
              alt="Profile"
              className="center-image object-cover h-full w-full"
            />
            <span>MY UNDERSTANDING OF</span>
          </span>
          <span className="heading-line">CREATIVITY —</span>
          <span className="heading-line">
            AS MOVEMENT. TIMING. AND EMOTION.
          </span>
        </div>

        {/* ── Small paragraph — right-aligned, close under heading ── */}
        <p className="small-paragraph">
          LATER, I GOT INTRODUCED ME TO WEB DEVELOPMENT, AND I REALIZED IT WAS
          THE PERFECT SPACE WHERE TECHNOLOGY MEETS ARTISTRY.
        </p>
      </div>

      {/* ════════════════════════════════════════
          SMALL / MEDIUM SCREEN  (< 1024px)
          No circles, no back btn, no stats
      ════════════════════════════════════════ */}
      <div className="intro-small">
        {/* 7-line right-aligned heading */}
        <div className="heading-sm" aria-label="Main heading">
          <div>THE WORLD OF RHYTHM A</div>
          <div>ND FLOW</div>
          <div>SHAPED MY UNDERSTANDI</div>
          <div>NG OF</div>
          <div>CREATIVITY —</div>
          <div>AS MOVEMENT, TIMING, AN</div>
          <div>D EMOTION.</div>
        </div>

        {/* Image (left) + paragraph (right, bottom-aligned) */}
        <div className="image-para-row">
          <div
            className="image-placeholder image-placeholder-sm"
            role="img"
            aria-label="Profile image placeholder"
          >
            IMG
          </div>

          <p className="para-sm">
            LATER, MY FATHER INTRODUCED ME TO WEB DEVELOPMENT, AND I REALIZED IT
            WAS THE PERFECT SPACE WHERE TECHNOLOGY MEETS ARTISTRY.
          </p>
        </div>
      </div>
    </div>
  );
}

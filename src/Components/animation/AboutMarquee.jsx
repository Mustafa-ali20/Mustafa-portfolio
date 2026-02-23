import { useEffect, useRef } from "react";
import "./AboutMarquee.scss";

const MARQUEE_TEXT = " FULL-STACK DEVELOPER  ✦  UI & UX DESIGN   ✦  FRONTEND ENGINEER  ✦ ";

export default function AboutMarquee() {
  const trackRef    = useRef(null);
  const rafRef      = useRef(null);
  const posRef      = useRef(0);          // current x translation in px
  const speedRef    = useRef(-1);         // px per frame — negative = left
  const targetSpeed = useRef(-1);         // what we're easing toward
  const lastScrollY = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // ── Measure single copy width so we know when to reset ────────────
    // Track contains 4 copies; each copy width = total / 4
    const getSingleWidth = () => track.scrollWidth / 4;

    // ── Scroll direction detection ─────────────────────────────────────
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta    = currentY - lastScrollY.current;

      if (delta > 0) {
        // Scrolling down → move left (negative)
        targetSpeed.current = -2.5;
      } else if (delta < 0) {
        // Scrolling up → move right (positive)
        targetSpeed.current = 2.5;
      }

      lastScrollY.current = currentY;
    };

    // ── Animation loop ─────────────────────────────────────────────────
    const tick = () => {
      // Ease current speed toward target (lerp)
      speedRef.current += (targetSpeed.current - speedRef.current) * 0.08;

      // Advance position
      posRef.current += speedRef.current;

      const singleW = getSingleWidth();

      // Seamless reset — when we've moved one full copy width, snap back
      if (posRef.current <= -singleW) {
        posRef.current += singleW;
      } else if (posRef.current >= 0) {
        posRef.current -= singleW;
      }

      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    // Start loop offset at -singleWidth so we begin mid-loop (no pop-in)
    posRef.current = -getSingleWidth();

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Render 4 copies — enough to cover any screen width with no gaps
  const copies = Array.from({ length: 4 }, (_, i) => (
    <span className="marquee-copy" key={i} aria-hidden={i > 0}>
      {MARQUEE_TEXT}
    </span>
  ));

  return (
    <div className="about-marquee" aria-label={MARQUEE_TEXT}>
      <div className="marquee-inner">
        <div className="marquee-track" ref={trackRef}>
          {copies}
        </div>
      </div>
    </div>
  );
}
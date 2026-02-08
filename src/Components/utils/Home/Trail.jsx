import React from "react";
import DecryptedText from "../../animation/DecryptedText";

const Trail = () => {
  return (
    <div>
      {/* Example 1: Defaults (hover to decrypt) */}
      <DecryptedText text="Hover me!" />

      {/* Example 2: Customized speed and characters */}
      <DecryptedText
        text="Customize me"
        speed={70}
        maxIterations={14}
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />

      {/* Example 3: Animate on view (runs once) */}
      <div style={{ marginTop: "4rem" }}>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
        />
      </div>
    </div>
  );
};
const scheduleButtonRef = useRef(null);
  const whiteOverlayRef = useRef(null);

  //  if (scheduleButtonRef.current && whiteOverlayRef.current) {
  //     const button = scheduleButtonRef.current;
  //     const overlay = whiteOverlayRef.current;
  //     const text = button.querySelector(".button-text");
  //     const icon = button.querySelector(".button-icon");

  //     gsap.set(overlay, {
  //       y: "100%",
  //       borderRadius: "70% 70% 0 0",
  //     });

  //     const handleMouseEnter = () => {
  //       gsap.to(overlay, {
  //         y: "0%",
  //         duration: 0.4,
  //         ease: "power2.out",
  //       });
  //       gsap.to([text, icon], {
  //         color: "#000000",
  //         duration: 0.2,
  //         ease: "power2.out",
  //       });
  //     };

  //     const handleMouseLeave = () => {
  //       gsap.to(overlay, {
  //         y: "100%",
  //         duration: 0.4,
  //         ease: "power2.out",
  //       });
  //       gsap.to([text, icon], {
  //         color: "#ffffff",
  //         duration: 0.2,
  //         ease: "power2.out",
  //       });
  //     };

  //     button.addEventListener("mouseenter", handleMouseEnter);
  //     button.addEventListener("mouseleave", handleMouseLeave);
  //   }
  // }, []);


 <button
            ref={scheduleButtonRef}
            data-cal-namespace="breif-meeting"
            data-cal-link="mustafa-aly/breif-meeting"
            data-cal-config='{"layout":"month_view"}'
            className="w-50 h-11 bg-zinc-800 text-white rounded-full font-[light] text-md hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            <div ref={whiteOverlayRef} className="absolute inset-0 bg-white" />
            <Calendar
              size={17}
              className="button-icon relative z-10 transition-colors duration-400"
            />
            <span className="button-text relative z-10 transition-colors duration-400">
              Schedule a call
            </span>
          </button>









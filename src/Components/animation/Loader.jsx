import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import TextLoader from "./TextLoader";

function Loader() {
  const blackRef = useRef(null);

  useGSAP(() => {
    gsap.to(blackRef.current, {
      y: "-100%",
      duration: 1.5,
      delay: 3.2,
      ease: "expo.inOut",
    });
  });

  return (
    <div ref={blackRef} className="h-screen bg-[#16171a] w-full z-[999] fixed">
        <TextLoader />
    </div>
  );
}

export default Loader;

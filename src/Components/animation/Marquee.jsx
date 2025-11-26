import React, { useState } from "react";

const Marquee = ({ images, speed = 25, direction = "left" }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentX, setCurrentX] = useState(0);

  // Duplicate images to create seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full flex justify-center">
      {/* Marquee Container - 45% width, centered */}
      <div
        className="relative w-[45%] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#121315] to-transparent z-10 pointer-events-none" />

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#121315] to-transparent z-10 pointer-events-none" />

        {/* Scrolling content */}
        <div
          className={`flex gap-8 ${
            direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"
          }`}
          style={{
            animationDuration: `${(duplicatedImages.length * speed) / 10}s`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedImages.map((imageData, index) => (
            <ImageItem key={index} imageData={imageData} index={index} />
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}</style>
    </div>
  );
};

// Individual image item component
const ImageItem = ({ imageData, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
        isHovered ? "scale-105 brightness-100" : "scale-100 brightness-35"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageData.src}
        alt={imageData.alt}
        className="w-25 h-25 object-contain"
      />
    </div>
  );
};

// Demo component
const MarqueeDemo = () => {
  // Updated to reference SVGs from public/icons folder
  const brandIcons = [
    { src: "/Icons/figma1.svg", alt: "Figma" },
    { src: "/Icons/github1.svg", alt: "GitHub" },
    { src: "/Icons/notion1.svg", alt: "Notion" },
    { src: "/Icons/vercel.svg", alt: "Vercel" },
    { src: "/Icons/vscode.svg", alt: "VS Code" },
    { src: "/Icons/openai.svg", alt: "OpenAI" },
    { src: "/Icons/npm.svg", alt: "Npm" },
  ];

  return (
    <div className="bg-[#121315] flex items-center justify-center">
      <div className="w-full">
        {/* First marquee - scrolling left */}
        <Marquee images={brandIcons} speed={30} direction="left" />

        {/* Second marquee - scrolling right, with minimal gap */}
        <div>
          <Marquee images={brandIcons} speed={30} direction="right" />
        </div>
      </div>
    </div>
  );
};

export default MarqueeDemo;

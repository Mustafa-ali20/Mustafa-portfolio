import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../../animation/DecryptedText";

const Tools = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const tools = [
    { id: 1, name: "react", src: "/Icons2/react.png", top: "15%", left: "60%" },
    {
      id: 2,
      name: "javascript",
      src: "/Icons2/javascript.png",
      top: "8%",
      left: "35%",
    },
    {
      id: 3,
      name: "vs code",
      src: "/Icons2/visual-studio-code.png",
      top: "72%",
      left: "79%",
    },
    {
      id: 4,
      name: "github",
      src: "/Icons2/github.png",
      top: "78%",
      left: "21%",
    },
    {
      id: 5,
      name: "typescript",
      src: "/Icons2/typescript.png",
      top: "55%",
      left: "4%",
    },
    { id: 6, name: "figma", src: "/Icons2/figma.png", top: "10%", left: "5%" },
    {
      id: 7,
      name: "motion",
      src: "/Icons2/framer.png",
      top: "34%",
      left: "20%",
    },
    {
      id: 8,
      name: "mongodb",
      src: "/Icons2/mongo-db.png",
      top: "40%",
      left: "45%",
    },
    { id: 9, name: "npm", src: "/Icons2/npm.png", top: "69%", left: "41%" },
    {
      id: 10,
      name: "node js",
      src: "/Icons2/nodejs.png",
      top: "50%",
      left: "64%",
    },
    {
      id: 11,
      name: "tailwind css",
      src: "/Icons2/tailwind.png",
      top: "12%",
      left: "80%",
    },
    { id: 12, name: "git", src: "/Icons2/git.png", top: "42%", left: "88%" },
  ];

  const generateFloatAnimation = (index) => {
    const baseDelay = index * 0.4;
    const randomDuration = 6 + Math.random() * 3;
    const randomX = (Math.random() - 0.5) * 12;
    const randomY = (Math.random() - 0.5) * 16;

    return {
      initial: { x: 0, y: 0 },
      animate: {
        x: [0, randomX, -randomX * 0.5, randomX * 0.3, 0],
        y: [0, randomY, -randomY * 0.6, randomY * 0.4, 0],
      },
      transition: {
        duration: randomDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: baseDelay,
      },
    };
  };

  const headingVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // Custom easing for smooth deceleration
      },
    },
  };

  return (
    <div className="h-screen bg-[#121315] flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="lg:px-25 w-full text-left mb-20 md:mb-20 overflow-hidden"
      >
        <motion.h2
          variants={headingVariants}
          className=" text-7xl md:text-[5.5rem] lg:text-[10rem] mb-3 font-[semibold] text-[rgb(90,90,90)] uppercase selection:bg-[rgb(90,90,90)] selection:text-[#121315]"
        >
          Tech Stack
        </motion.h2>
        <p className="w-full text-white ml-1 md:ml-1.5 text-sm md:text-lg lg:text-xl font-[light] selection:bg-zinc-100 selection:text-[#121315]">
          <DecryptedText
            text=" A practical stack I work with on real projects."
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
            speed={40}
            maxIterations={1}
          />
        </p>
      </motion.div>

      <div className="hidden md:block relative w-full max-w-6xl h-[600px]">
        {tools.map((tool, index) => {
          const animation = generateFloatAnimation(index);
          return (
            <motion.div
              key={tool.id}
              className="absolute flex flex-col items-center"
              style={{
                top: tool.top,
                left: tool.left,
              }}
              initial={animation.initial}
              animate={animation.animate}
              transition={animation.transition}
              onMouseEnter={() => setHoveredId(tool.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center backdrop-blur-md bg-white/2 border border-white/20 shadow-lg cursor-pointer hover:bg-white/5 transition-colors duration-300">
                <img
                  src={tool.src}
                  alt="tool icon"
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                />
              </div>

              <AnimatePresence>
                {hoveredId === tool.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3"
                  >
                    <DecryptedText
                      text={tool.name.toUpperCase()}
                      speed={80}
                      maxIterations={30}
                      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                      className="text-white text-md font-[light] whitespace-nowrap selection:bg-zinc-100 selection:text-[#121315]"
                      encryptedClassName="text-white text-md font-[light] whitespace-nowrap"
                      animateOn="view"
                      revealDirection="start"
                      sequential
                      useOriginalCharsOnly={true}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: Grid Layout (No Animation) */}
      <div className="grid grid-cols-3 gap-10 md:hidden w-full max-w-sm">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="w-full aspect-square rounded-full flex items-center justify-center backdrop-blur-md bg-white/2 border border-white/20 shadow-lg"
          >
            <img
              src={tool.src}
              alt="tool icon"
              className="w-12 h-13 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;

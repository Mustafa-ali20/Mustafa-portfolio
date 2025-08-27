import React, { useState, useEffect } from "react";

const TextLoader = () => {
  const words = [
    "Hello",
    "Bonjour",
    "سلام",
    "Olá",
    "你好",
    "Ciao",
    "नमस्ते",
    "Hallo",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeouts = [];

    setTimeout(() => {
      words.forEach((_, index) => {
        const delay = index * 260;

        const timeout = setTimeout(() => {
          setCurrentIndex(index);
        }, delay);

        timeouts.push(timeout);
      });
    }, 700);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Foreground text */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-zinc-200 font-[mooxy] tracking-[0.23vw] select-none drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
          <span>• {words[currentIndex]}</span>
        </h1>
      </div>
    </div>
  );
};

export default TextLoader;

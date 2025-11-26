import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 select-none">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative bg-white/5 border border-white/10 rounded-full px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-1 backdrop-blur-xl flex items-center space-x-2 sm:space-x-3 lg:space-x-4 shadow-lg shadow-black/20"
      >
        {navItems.map((item) => (
          <Tab
            key={item.id}
            setPosition={setPosition}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm lg:text-md font-[bold] text-white mix-blend-difference transition-colors duration-200 select-none"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="absolute z-0 h-6 sm:h-8 lg:h-10 rounded-full bg-white/20 backdrop-blur-sm"
    />
  );
};

export default Navbar;

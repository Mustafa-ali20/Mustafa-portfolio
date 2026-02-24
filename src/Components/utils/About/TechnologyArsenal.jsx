import React, { useState } from "react";
import { motion } from "framer-motion";
import DecryptedText from "../../animation/DecryptedText";

const TechnologyArsenal = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const headingVariants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const categories = [
    {
      title: "Languages & Frameworks",
      technologies: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js"],
    },
    {
      title: "3D & Graphics",
      technologies: ["GSAP", "Framer Motion"],
    },
    {
      title: "Databases & State",
      technologies: ["PostgreSQL", "MongoDB", "React Query", "Redux"],
    },
    {
      title: "UI & Styling",
      technologies: ["Tailwind CSS", "ShadCN UI", "MUI", "Framer Motion"],
    },
  ];

  return (
    <section className="h-fit bg-[#121315] py-16 px-8">
      <div className="mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="lg:px-8 w-full text-left mb-16 md:mb-20 lg:mb-24 overflow-hidden"
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={headingVariants}
              className="text-7xl md:text-[5.5rem] lg:text-[10rem] mb-3 font-[semibold] text-[rgb(90,90,90)] uppercase selection:bg-[rgb(90,90,90)] selection:text-[#121315]"
            >
              Tech Stack
            </motion.h2>
          </div>
          <p className="w-full text-white ml-1 md:ml-1.5 text-sm md:text-lg lg:text-xl font-[light] selection:bg-zinc-100 selection:text-[#121315]">
            <DecryptedText
              text="A practical stack I work with on real projects."
              animateOn="view"
              revealDirection="start"
              sequential
              useOriginalCharsOnly={false}
              speed={40}
              maxIterations={1}
            />
          </p>
        </motion.div>

        <div className="lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-18">
          {categories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-[regular] text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => {
                  const key = `${index}-${techIndex}`;
                  const isHovered = hoveredTech === key;

                  return (
                    <p
                      key={techIndex}
                      onMouseEnter={() => setHoveredTech(key)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={`px-4 py-2 text-sm md:text-base font-[light] rounded-lg transition-colors duration-200 cursor-default hover:outline-2 -outline-offset-4 ${
                        isHovered
                          ? "bg-white text-[#121315]"
                          : "bg-[#1a1b1f] text-white"
                      }`}
                    >
                      {isHovered ? (
                        <DecryptedText
                          text={tech}
                          speed={80}
                          maxIterations={15}
                          characters="abcdefghijklmnopqrstuvwxyz"
                          className="font-[light]"
                          encryptedClassName="font-[light]"
                          animateOn="view"
                          sequential
                          useOriginalCharsOnly={true}
                        />
                      ) : (
                        tech
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyArsenal;
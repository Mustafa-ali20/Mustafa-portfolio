import React from "react";
import { motion } from "framer-motion";
import DecryptedText from "../../animation/DecryptedText";

const TechnologyArsenal = () => {
  // Animation variants for heading
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

  // Technology categories
  const categories = [
    {
      title: "Languages & Frameworks",
      technologies: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "3D & Graphics",
      technologies: [
        "GSAP",
        "Framer Motion",
      ],
    },
    {
      title: "Databases & State",
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "React Query",
        "Zustand",
      ],
    },
    {
      title: "UI & Styling",
      technologies: [
        "Tailwind CSS",
        "ShadCN UI",
        "MUI",
        "Framer Motion",
      ],
    },
  ];

  return (
    <section className="h-fit bg-[#121315] py-16 px-8">
      <div className="mx-auto">
        
        {/* Heading & Subheading */}
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

        {/* Technology Categories Grid */}
        <div className="lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-18">
          {categories.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-[regular] text-white">
                {category.title}
              </h3>

              {/* Technology Buttons */}
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    className="px-4 py-2 bg-[#1a1b1f] text-white text-sm md:text-base font-[light] rounded-lg hover:bg-[#22232a] transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyArsenal;
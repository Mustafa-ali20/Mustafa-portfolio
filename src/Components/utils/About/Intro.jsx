import React from "react";
import { motion } from "framer-motion";
import DecryptedText from "../../animation/DecryptedText";
import AboutMArquee from "../../animation/AboutMarquee"; // Placeholder - build this separately

const Intro = () => {
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

  return (
    <section className="min-h-screen bg-[#121315]">
      <div className="px-4 py-8 md:px-4 md:py-7 lg:px-10 lg:py-20 mx-auto">
        {/* Heading & Subheading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="lg:px-8 w-full text-left mb-12 md:mb-16 lg:mb-20 overflow-hidden"
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={headingVariants}
              className="text-7xl md:text-[5.5rem] lg:text-[10rem] mb-3 font-[semibold] text-[rgb(90,90,90)] uppercase selection:bg-[rgb(90,90,90)] selection:text-[#121315]"
            >
              About Me
            </motion.h2>
          </div>
          <p className="w-full max-w-5xl text-white ml-1 md:ml-1.5 text-sm md:text-lg lg:text-xl font-[light] leading-relaxed selection:bg-zinc-100 selection:text-[#121315]">
            I'm a front-end developer with around 60% backend knowledge,
            steadily moving toward becoming a full-stack developer. I enjoy
            building things that genuinely make life easier for users and
            businesses. Most of my work currently sits at the intersection of
            clean UI development and structured backend logic, as I continue
            expanding into full-stack architecture. I like taking ideas from the
            first concept all the way to a polished product—whether that means
            designing a clean React interface or structuring reliable backend
            services. I focus heavily on real results and practical
            implementation. My goal is always the same: create fast, scalable,
            and meaningful tools that people actually enjoy using.
          </p>
        </motion.div>

        {/* Marquee Text Placeholder */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <AboutMArquee />
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 xl:gap-14">
          {/* Left Column - Description Text */}
          <div className="lg:px-8">
            <div className="space-y-6 md:space-y-8">
              <p className="text-white text-sm md:text-base lg:text-lg font-[light] leading-relaxed selection:bg-zinc-100 selection:text-[#121315]">
                I'm a front-end developer transitioning into full-stack
                development, combining strong UI expertise with growing backend
                depth. I work primarily with React, Tailwind CSS, SCSS, GSAP,
                and Framer Motion to craft clean, modern, and highly interactive
                user interfaces. On the backend, I build structured and scalable
                systems using Node.js, Express, and MongoDB, focusing on
                performance, maintainability, and real-world usability.
              </p>

              <p className="text-white text-sm md:text-base lg:text-lg font-[light] leading-relaxed selection:bg-zinc-100 selection:text-[#121315]">
                My approach blends thoughtful design with solid
                architecture—whether I'm creating smooth animations,
                experimenting with Three.js for immersive 3D experiences, or
                building REST APIs that power dynamic applications. I care
                deeply about clean UI, responsive layouts, and meaningful user
                experiences while ensuring the backend logic remains reliable
                and efficient.
              </p>

              <p className="text-white text-sm md:text-base lg:text-lg font-[light] leading-relaxed selection:bg-zinc-100 selection:text-[#121315]">
                What sets me apart is my ability to think across both layers of
                an application. I design intuitive frontends, structure secure
                backend services, manage databases, and connect everything into
                a seamless product. I don't just build interfaces or servers—I
                build complete, scalable web experiences that feel polished,
                fast, and purposeful.
              </p>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="w-full h-[500px] md:h-[900px] lg:h-[1000px] lg:pr-8">
            <img src="/Images/me.jpeg" alt="" className="w-full h-full rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

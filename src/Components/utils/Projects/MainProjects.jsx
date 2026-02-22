import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import MarqueeDemo from "../../animation/Marquee";
import DecryptedText from "../../animation/DecryptedText"; // adjust path as needed
import Footer from "../Shared/Footer";

const headingVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const MainProjects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Taher Films",
      description:
        "A clean, modern portfolio showcasing Taher Films' creative work with smooth animations, fast performance, and a professional, cinematic presentation.",
      href: "https://www.taherfilms.site/",
      gradient: "from-slate-800 via-purple-700 to-blue-800",
      radialGradient:
        "radial-gradient(120% 180% at 50% 0%, rgba(153, 27, 27, 0.35) 0%, rgba(220, 38, 38, 0.12) 35%, rgba(239, 68, 68, 0) 70%)",
      image: "/Images/Taher-Films.png",
    },
    {
      id: 2,
      title: "Movie Site",
      description: "Discover and explore movies with ratings and reviews.",
      href: "https://scsdb-movieweb.vercel.app/",
      gradient: "from-slate-800 via-purple-700 to-blue-800",
      radialGradient:
        "radial-gradient(120% 180% at 50% 0%, rgba(30,41,59,0.35) 0%, rgba(126,34,206,0.12) 35%, rgba(30,64,175,0) 70%)",
      image: "/Images/movie-app.png",
    },
    {
      id: 3,
      title: "K72 Agency",
      description:
        "K72 Agency delivers bold, creative, and impactful brand strategies.",
      href: "https://k72-agency.vercel.app/",
      gradient: "from-sky-200 via-blue-100 to-slate-100",
      radialGradient:
        "radial-gradient(120% 80% at 50% 0%, rgba(186,230,253,0.35) 0%, rgba(219,234,254,0.12) 35%, rgba(241,245,249,0) 70%)",
      image: "/Images/K72.png",
    },
    {
      id: 4,
      title: "ExoApe Clone",
      description: "Modern creative agency website with stunning animations.",
      href: "https://exo-ape-ten.vercel.app/",
      gradient: "from-sky-200 via-blue-100 to-slate-100",
      radialGradient:
        "radial-gradient(120% 80% at 50% 0%, rgba(186,230,253,0.35) 0%, rgba(219,234,254,0.12) 35%, rgba(241,245,249,0) 70%)",
      image: "/Images/Exo-Ape.png",
    },
    {
      id: 5,
      title: "Refokus Clone",
      description:
        "Awwward-winning design agency portfolio with interactive elements.",
      href: "https://mustafa-ali20.github.io/Refokus/",
      gradient: "from-gray-900 via-purple-800 to-cyan-600",
      radialGradient:
        "radial-gradient(120% 80% at 50% 0%, rgba(17,24,39,0.35) 0%, rgba(107,33,168,0.12) 35%, rgba(8,145,178,0) 70%)",
      image: "/Images/Refokus.png",
    },
    {
      id: 6,
      title: "Task Assigner (Under Development)",
      description:
        "Efficient task assignment and management platform. Admin and employee side.",
      href: "#",
      gradient: "from-zinc-700 via-blue-600 to-gray-500",
      radialGradient:
        "radial-gradient(120% 80% at 50% 0%, rgba(63,63,70,0.35) 0%, rgba(37,99,235,0.12) 35%, rgba(107,114,128,0) 70%)",
      image: "/Images/orbit.png",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      {/* ── Heading + Subheading ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="lg:px-25 w-full text-left mb-20 md:mb-20 overflow-hidden"
      >
        <motion.h2
          variants={headingVariants}
          className="text-7xl md:text-[5.5rem] lg:text-[10rem] mb-3 font-[semibold] text-[rgb(90,90,90)] uppercase selection:bg-[rgb(90,90,90)] selection:text-[#121315]"
        >
          My Projects
        </motion.h2>
        <p className="w-full text-white ml-1 md:ml-1.5 text-sm md:text-lg lg:text-xl font-[light] selection:bg-zinc-100 selection:text-[#121315]">
          <DecryptedText
            text="Explore my latest work and creative endeavors."
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
            speed={40}
            maxIterations={1}
          />
        </p>
      </motion.div>

      {/* ── Projects Grid ── */}
      <div className="w-full">
        {/*
          Mobile / tablet: single column (flex-col, items-center — same as before)
          Large screens:   2-column CSS grid
        */}
        <div className="flex flex-col gap-8 items-center lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-10 lg:px-20 lg:items-stretch">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full">
              {/* Outer Frame */}
              <a
                href={project.href}
                className="group block relative w-full h-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} project`}
              >
                <div className="border border-[#262626] rounded-2xl p-1 h-full">
                  {/* Inner Frame */}
                  <div className="relative border border-[#2f2f2f] rounded-xl p-1 bg-[#161616] overflow-hidden transition-colors duration-300 ease-out group-hover:border-white group-focus:border-white h-full">
                    {/* Dynamic Spotlight Gradient */}
                    <div
                      className="absolute inset-x-0 top-0 h-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
                      style={{
                        background: project.radialGradient,
                        zIndex: 1,
                      }}
                    />

                    {/* Main Content Container */}
                    <div className="relative z-10 p-6 md:p-8 lg:p-8 h-[400px] md:h-[530px] lg:h-[500px] xl:h-[580px] flex flex-col">
                      {/* Top Row */}
                      <div className="flex items-start justify-between mb-6 md:mb-8">
                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-[bold] text-white mb-2">
                            {project.title}
                          </h2>
                          <p className="text-sm md:text-base lg:text-sm xl:text-base font-[regular] text-zinc-400 max-w-md">
                            {project.description}
                          </p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="ml-6 shrink-0">
                          <MoveRight
                            size={28}
                            className="text-white transition-transform duration-700 ease-out translate-x-0 group-hover:translate-x-2 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
                          />
                        </div>
                      </div>

                      {/* Image Container */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full transition-transform duration-300 ease-out translate-y-1 group-hover:-translate-y-1 relative z-10">
                          <div className="w-full h-full object-cover rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.title} Screenshot`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Focus outline */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#191a1b] ring-opacity-0 group-focus:ring-opacity-100 transition-all duration-200 pointer-events-none"></div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-30 hidden lg:block">
        <MarqueeDemo />
      </div>
      <div className="mt-50">
        <Footer />
      </div>
    </div>
  );
};

export default MainProjects;

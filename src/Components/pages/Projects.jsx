import React from "react";
import { MoveRight } from "lucide-react";
import MarqueeDemo from "../animation/Marquee";
import Transition from "../animation/Transition";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Taher Films",
      description:
        "A clean, modern portfolio showcasing Taher Films’ creative work with smooth animations, fast performance, and a professional, cinematic presentation.",
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
      title: "Task Assigner",
      description:
        "Efficient task assignment and managnment platform. Admin and employee side.",
      href: "#",
      gradient: "from-zinc-700 via-blue-600 to-gray-500",
      radialGradient:
        "radial-gradient(120% 80% at 50% 0%, rgba(63,63,70,0.35) 0%, rgba(37,99,235,0.12) 35%, rgba(107,114,128,0) 70%)",
      image: "/Images/orbit.png",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Projects Stack - Vertically Aligned */}
        <div className="flex flex-col gap-8 lg:gap-12 xl:gap-16 items-center">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full max-w-5xl">
              {/* Outer Frame (Frame #1) */}
              <a
                href={project.href}
                className="group block relative w-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} project`}
              >
                <div className="border border-[#262626] rounded-2xl p-1">
                  {/* Inner Frame (Frame #2) */}
                  <div className="relative border border-[#2f2f2f] rounded-xl p-1 bg-[#161616] overflow-hidden transition-colors duration-300 ease-out group-hover:border-white group-focus:border-white">
                    {/* Dynamic Spotlight Gradient (Hidden by default, appears on hover) */}
                    <div
                      className="absolute inset-x-0 top-0 h-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
                      style={{
                        background: project.radialGradient,
                        zIndex: 1,
                      }}
                    />

                    {/* Main Content Container - Increased Height Again (15% more) */}
                    <div className="relative z-10 p-6 md:p-8 lg:p-10 h-[400px] md:h-[530px] lg:h-[660px] flex flex-col">
                      {/* Top Row: Title & Topic (Left) + Arrow (Right) */}
                      <div className="flex items-start justify-between mb-6 md:mb-8">
                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[bold] text-white mb-2">
                            {project.title}
                          </h2>
                          <p className="text-sm md:text-base lg:text-md font-[regular] text-zinc-400 max-w-md">
                            {project.description}
                          </p>
                        </div>

                        {/* Arrow Icon - Facing Right */}
                        <div className="ml-6 shrink-0">
                          <MoveRight
                            size={28}
                            className="text-white transition-transform duration-700 ease-out translate-x-0 group-hover:translate-x-2 md:w-8 md:h-8 lg:w-10 lg:h-10"
                          />
                        </div>
                      </div>

                      {/* Center Image Container - Flexible Space */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full transition-transform duration-300 ease-out translate-y-1 group-hover:-translate-y-1 relative z-10">
                          {/* Enhanced Background with Different Gradients for Each Project */}

                          <div className="w-full h-full  rounded-lg flex items-center justify-center overflow-hidden">
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

                {/* Focus outline for accessibility */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#191a1b] ring-opacity-0 group-focus:ring-opacity-100 transition-all duration-200 pointer-events-none"></div>
              </a>
            </div>
          ))}
        </div>

        {/* Under Development Section */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-[bold] text-zinc-400 mb-1.5">
              Under Development
            </h3>
            <div className="w-30 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="mt-30 hidden lg:block">
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default Transition(Projects);

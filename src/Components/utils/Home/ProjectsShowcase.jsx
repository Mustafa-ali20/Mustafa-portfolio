import React from "react";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProjectsShowcase() {
  const navigate = useNavigate();
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
      id: 3,
      title: "Movie Site",
      description: "Discover and explore movies with ratings and reviews.",
      href: "https://scsdb-movieweb.vercel.app/",
      gradient: "from-slate-800 via-purple-700 to-blue-800",
      radialGradient:
        "radial-gradient(120% 180% at 50% 0%, rgba(30,41,59,0.35) 0%, rgba(126,34,206,0.12) 35%, rgba(30,64,175,0) 70%)",
      image: "/Images/movie-app.png",
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
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="mx-auto px-1 lg:px-25">
        {/* Heading */}
        <div className="mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-7xl md:text-[5.5rem] lg:text-[10rem] font-[semibold] text-[rgb(90,90,90)] mb-3 uppercase">
            My Projects
          </h1>
          <p className="text-white mt-2 ml-1 md:ml-1.5 text-sm md:text-lg lg:text-xl font-[light]">
            Explore my latest work and creative endeavors
          </p>
        </div>

        {/* Projects Grid - 2 columns on large screens, 1 column on small/medium */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {projectsData.slice(0, 2).map((project) => (
            <div key={project.id} className="w-full">
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

                    {/* Main Content Container */}
                    <div className="relative z-10 p-6 md:p-8 h-[400px] md:h-[500px] lg:h-[550px] flex flex-col">
                      {/* Top Row: Title & Topic (Left) + Arrow (Right) */}
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-[bold] text-white mb-2">
                            {project.title}
                          </h2>
                          <p className="text-xs md:text-sm lg:text-base font-[regular] text-zinc-400 max-w-md line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Arrow Icon - Facing Right */}
                        <div className="ml-4 shrink-0">
                          <MoveRight
                            size={24}
                            className="text-white transition-transform duration-700 ease-out translate-x-0 group-hover:translate-x-2 md:w-7 md:h-7 lg:w-8 lg:h-8"
                          />
                        </div>
                      </div>

                      {/* Center Image Container - Flexible Space */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full transition-transform duration-300 ease-out translate-y-1 group-hover:-translate-y-1 relative z-10">
                          <div className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
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

        {/* Second Row - Only visible on large screens */}
        <div className="hidden lg:grid grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mt-6 lg:mt-8 xl:mt-10">
          {projectsData.slice(2, 4).map((project) => (
            <div key={project.id} className="w-full">
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

                    {/* Main Content Container */}
                    <div className="relative z-10 p-6 md:p-8 h-[400px] md:h-[500px] lg:h-[550px] flex flex-col">
                      {/* Top Row: Title & Topic (Left) + Arrow (Right) */}
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-[bold] text-white mb-2">
                            {project.title}
                          </h2>
                          <p className="text-xs md:text-sm lg:text-base font-[regular] text-zinc-400 max-w-md line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Arrow Icon - Facing Right */}
                        <div className="ml-4 shrink-0">
                          <MoveRight
                            size={24}
                            className="text-white transition-transform duration-700 ease-out translate-x-0 group-hover:translate-x-2 md:w-7 md:h-7 lg:w-8 lg:h-8"
                          />
                        </div>
                      </div>

                      {/* Center Image Container - Flexible Space */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full transition-transform duration-300 ease-out translate-y-1 group-hover:-translate-y-1 relative z-10">
                          <div className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
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
        <div className="flex items-center justify-center mt-13 lg:mt-20">
          <button
            className="px-[2.3rem] py-[0.8rem]  bg-transparent border border-white/20 text-white font-[light] text-[0.75rem] tracking-[0.15em] cursor-pointer rounded-[50px] transition-all duration-300 ease-in-out z-10 hover:bg-white/05 hover:border-white/30 "
          >
            PROJECTS
          </button>
        </div>

        {/* Descriptive Text Section - Added Above Stats */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
            {/* Left Text */}
            <div>
              <p className="text-2xl md:text-3xl lg:text-3xl font-[regular] text-white leading-relaxed">
                Driving measurable growth and engagement through thoughtful
                design and engineering.
              </p>
            </div>

            {/* Right Text */}
            <div>
              <p className="text-sm md:text-base lg:text-lg font-[light] text-[rgb(95,95,95)] leading-relaxed">
                Every product I build starts with understanding user goals and
                translating them into intuitive, high-performance experiences.
                From concept to launch, I focus on meaningful results—boosting
                user engagement, retention, and overall business impact.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 md:mt-12">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Years of Experience */}
            <div>
              <div className="border-t border-gray-400 pt-6">
                <p className="text-xs md:text-sm font-[regular] text-[rgb(90,90,90)] uppercase tracking-wider mb-4">
                  YEARS OF EXPERIENCE
                </p>
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-[semibold] text-white">
                  1+
                </h3>
              </div>
            </div>

            {/* Right Column - Projects Completed */}
            <div>
              <div className="border-t border-gray-400 pt-6">
                <p className="text-xs md:text-sm font-[regular] text-[rgb(90,90,90)] uppercase tracking-wider mb-4">
                  PROJECTS COMPLETED
                </p>
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-[semibold] text-white">
                  8+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsShowcase;

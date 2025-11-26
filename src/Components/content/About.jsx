import React, { useState, useEffect } from "react";
import { Waypoints, Calendar, ArrowUpRight } from "lucide-react";

function About() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      weekday: "long",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-[#121315] min-h-screen w-full flex items-center justify-center px-4 py-6 sm:px-8 sm:py-10 lg:px- lg:py-35 ">
    
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[92vh] w-[70.3vw] p-2 gap-2 text-white">
        {/* col 1 */}
        <div className="flex h-[89.5vh] w-[50vw] max-w-[418px] min-w-[320px] flex-col gap-[1vh]">
          <div className="card h-[68vh] w-full cursor-pointer focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl overflow-hidden">
            <img
              src="/Images/me.jpeg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="card flex h-[20.5vh] w-full cursor-pointer flex-col justify-between py-[2.4vh] px-[3.2vw] focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl">
            <h1 className="text-left font-extrabold text-[5vh] font-[bold] leading-none">
              AKA.
            </h1>
            <p className="skills font-[light] text-[1.45vh] text-zinc-300">
              "The guy with football on screen, dumbbells in hand, and friends
              around — that's my favorite combo, because life's better loud and
              active."
            </p>
          </div>
        </div>
        {/* col 2 */}
        <div className="flex h-[89.5vh] w-[74vw] flex-col gap-2">
          <div className="card flex h-[35.2vh] w-full cursor-pointer flex-col justify-center gap-8 focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl px-8 py-10">
            <h1 className="text-[2.5vw] font-[regular] leading-none mb-4">
              I'm a Front-End <br />
              <span className="text-[3.65vw] font-[semibold] tracking-tight">
                Developer
              </span>
            </h1>
            <p className="text-[1.56vh] font-[light] text-zinc-300">
              My journey in the world of coding began a year ago with a spark of
              curiosity for how things work on the web. From those first steps
              of trial and error to building full projects today, I have shaped
              my skills into creating experiences that connect ideas with
              people. Blending logic with creativity, I strive to craft work
              that feels seamless, functional, and alive. Let's build something
              that stands out.
            </p>
          </div>
          <div className="flex h-[35.9vh] w-full gap-[1vh]">
            <div className="card relative flex w-[50.8vw] max-w-[418px] cursor-pointer flex-col justify-center gap-8 focus:z-[99px] bg-[#4D389B] border-[7px] border-[#644DBA] px-8 rounded-3xl ">
              <div className="flex items-center justify-between">
                <h2 className="text-left text-[2.5vw] font-[bold] tracking-tight uppercase">
                  Skills.
                </h2>
                <div>
                  <Waypoints size={35} />
                </div>
              </div>

              <ul className="text-left text-[.8vw] text-white leading-5 font-[semibold]">
                <li>Front-End Developer</li>
                <li>UI/UX Designer</li>
                <li>React Developer</li>
                <li>Interactive UI Design</li>
                <li>Web Animation (GSAP, Framer Motion)</li>
              </ul>
            </div>
            <div className="card w-[24.9vw] max-w-[205px] cursor-pointer pl-5 pt-10 focus:z-[99px] rounded-3xl bg-[#161616] border-[1px] border-[#262626] px-2 relative flex flex-col overflow-hidden">
              <div className="flex flex-col items-center gap-4 lg:gap-2 2xl:gap-5 pb-2">
                <h1 className="font-[bold] text-4xl leading-none">
                  {formatTime(currentTime)}
                </h1>
                <h1 className="font-[bold] text-3xl leading-none">
                  {formatDate(currentTime)}
                </h1>
              </div>
            </div>
          </div>
          <div className="card flex h-[22.5vh] w-full flex-col justify-center gap-3 py-5 hover:z-50 bg-[#161616] border-[1px] border-[#262626] rounded-3xl px-8">
            <h1 className="text-left text-[2.5vw] font-[bold] tracking-tight">
              STACK.
            </h1>

            <div className="card relative flex flex-wrap items-center justify-start h-[65px] w-[95%] gap-2 px-3 border-[1px] border-[#262626] rounded-3xl">
              <div className="flex items-center justify-center w-10 h-10 origin-bottom hover:scale-[1.35] mr-1 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
                <img
                  src="/Icons/react.png"
                  alt="react"
                  className="w-[2.5rem] h-[2.5rem] object-cover rounded-xl"
                />
              </div>
              <div className="flex items-center justify-center w-10 h-10 mr-1 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
                <img
                  src="/Icons/js.png"
                  alt="js"
                  className="w-[2.5rem] h-[2.5rem] object-cover rounded-xl"
                />
              </div>

              {/* Normal icons */}
              {["framer", "github", "vscode", "figma", "discord"].map(
                (icon, idx) => (
                  <div
                    key={idx}
                    className="flex items-end justify-center w-12 h-12 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300"
                  >
                    <img
                      src={`/Icons/${icon}.png`}
                      alt={icon}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )
              )}

              {/* GSAP icon */}
              <div className="flex items-center justify-center w-10 h-10 mr-1 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
                <img
                  src="/Icons/gsap.png"
                  alt="gsap"
                  className="w-[2.5rem] h-[2.5rem] object-cover rounded-xl"
                />
              </div>
              <div className="flex items-center justify-center w-10 h-10 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
                <img
                  src="/Icons/tailwind.png"
                  alt="tailwind"
                  className="w-[2.5rem] h-[2.5rem] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className="flex h-[89.5vh] w-[31vw] flex-col gap-2 rounded-3xl">
          <div className="flex flex-col justify-between h-[180px] w-full p-2 pt-0 rounded-3xl">
            {/* Top row */}
            <div className="flex items-center justify-start gap-x-2 gap-y-2">
              {/* Text LIN<br>KS */}
              <div className="text-[2.5vw] font-extrabold font-[bold] text-[#D9D9D9] leading-none">
                LIN
                <br />
                KS.
              </div>

              {/* 2 Logos */}
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="/Icons/behance.svg"
                  alt="Behance"
                  className="w-21 object-contain hover:scale-105 transition-transform duration-200 leading-none h-fit"
                />
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="/Icons/dribble.svg"
                  alt="Dribbble"
                  className="w-21 object-contain hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-start gap-x-2 ">
              {/* 3 Logos - positioned to align with top icons */}
              <a
                href="https://www.instagram.com/mustafaaa.ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="/Icons/nsta.svg"
                  alt="Instagram"
                  className="w-20 object- hover:scale-105 transition-transform duration-200"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/mustafa-ali-a7736b218/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="/Icons/linkdin.svg"
                  alt="LinkedIn"
                  className="w-20 object-contain hover:scale-105 transition-transform duration-200"
                />
              </a>

              <a
                href="https://github.com/Mustafa-ali20"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src="/Icons/github.svg"
                  alt="GitHub"
                  className="w-20 object-contain hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          <div className="card h-[41.5vh] w-full cursor-pointer p-3 focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl">
            <h1 className="text-[1.7vw] font-extrabold font-[bold] leading-none uppercase">
              Recent <br /> Works.
            </h1>
            <div className="mt-8 flex flex-col font-[bold] gap-4">
              <div className="group">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[1vw]">Taher Films</p>
                  <p>Oct-2025</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.taherfilms.site/"
                  className="font-[light] flex gap-x-2 items-center text-[.75vw] text-[#D9D9D9]"
                >
                  Taherfilms.site
                  <ArrowUpRight
                    size={15}
                    className="origin-bottom group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              </div>
              <div className="group">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[1vw]">K72 Clone</p>
                  <p>Aug-2025</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://k72-agency.vercel.app/"
                  className="font-[light] flex gap-x-2 items-center text-[.75vw] text-[#D9D9D9]"
                >
                  mustafa-vercel{" "}
                  <ArrowUpRight
                    size={15}
                    className="origin-bottom group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              </div>
              <div className="group">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[1vw]">Movie Site</p>
                  <p>Jul-2025</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://scsdb-movieweb.vercel.app/"
                  className="font-[light] flex gap-x-2 items-center text-[.75vw] text-[#D9D9D9]"
                >
                  mustafa-vercel{" "}
                  <ArrowUpRight
                    size={15}
                    className="origin-bottom group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="card relative h-[27.9vh] w-full hover:z-50 bg-[#161616] border-[1px] border-[#262626] rounded-3xl p-5">
            <h2 className="text-4xl font-[bold] mb-3 text-white">Hobbies</h2>
            <ul className="list-disc list-inside font-[variable] text-gray-300">
              <li>Video Games 🎮</li>
              <li>Travel ✈️</li>
              <li>Outing 🌆</li>
              <li>Cooking 🍳</li>
              <li>Football ⚽</li>
            </ul>
          </div>
          <div className="card h-[5.6vh] w-full cursor-pointer transition-all duration-200 ease-out hover:scale-90 focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl">
            <div className="flex items-center justify-center gap-3 font-[bold] text-lg p-2">
              <Calendar size={22} />
              <a
                href="https://cal.com/mustafa-aly"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="flex lg:hidden flex-col w-full max-w-2xl gap-4 text-white">
        {/* 1. Photo */}
        <div className="card h-[68vh] w-full cursor-pointer focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl overflow-hidden">
          <img
            src="/Images/me.jpeg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* 2. AKA */}
        <div className="card flex h-[20.5vh] w-full cursor-pointer flex-col justify-between py-6 px-6 focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl">
          <h1 className="text-left font-extrabold text-5xl sm:text-7xl font-[bold] leading-none">
            AKA.
          </h1>
          <p className="skills font-[light] text-sm sm:text-base text-zinc-300">
            "The guy with football on screen, dumbbells in hand, and friends
            around — that's my favorite combo, because life's better loud and
            active."
          </p>
        </div>

        {/* 3. Intro */}
        <div className="card flex h-[35.2vh] w-full cursor-pointer flex-col justify-center gap-6 focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl px-6 py-8">
          <h1 className="text-4xl sm:text-5xl font-[regular] leading-none mb-4">
            I'm a Front-End <br />
            <span className="text-5xl sm:text-6xl font-[semibold] tracking-tight">
              Developer
            </span>
          </h1>
          <p className="text-xs sm:text-base font-[light] text-zinc-300">
            My journey in the world of coding began a year ago with a spark of
            curiosity for how things work on the web. From those first steps of
            trial and error to building full projects today, I have shaped my
            skills into creating experiences that connect ideas with people.
            Blending logic with creativity, I strive to craft work that feels
            seamless, functional, and alive. Let's build something that stands
            out.
          </p>
        </div>

        {/* 4. Skills + Date/Time */}
        <div className="flex flex-col sm:flex-row h-auto sm:h-[35.9vh] w-full gap-4">
          <div className="card relative flex flex-1 cursor-pointer flex-col justify-center gap-6 focus:z-[99px] bg-[#4D389B] border-[7px] border-[#644DBA] px-6 py-8 rounded-3xl">
            <div className=" flex gap-40 items-center">
              <h2 className="text-left text-4xl sm:text-4xl font-[bold] tracking-tight uppercase">
                Skills.
              </h2>
              <div className="">
                <Waypoints size={32} />
              </div>
            </div>

            <ul className="bold text-left text-sm sm:text-base text-white leading-5 font-[semibold]">
              <li>Front-End Developer</li>
              <li>UI/UX Designer</li>
              <li>React Developer</li>
              <li>Interactive UI Design</li>
              <li>Web Animation (GSAP, Framer Motion)</li>
            </ul>
          </div>
          <div className="card w-full sm:w-48 h-32 sm:h-full cursor-pointer p-4 focus:z-[99px] rounded-3xl bg-[#161616] border-[1px] border-[#262626] relative flex flex-col justify-center">
            <h1 className="font-[bold] text-3xl sm:text-3xl text-center sm:text-left leading-none">
              {formatTime(currentTime)}
            </h1>
            <h1 className="font-[bold] text-4xl sm:text-2xl text-center sm:text-left mt-4 leading-none">
              {formatDate(currentTime)}
            </h1>
          </div>
        </div>

        {/* 5. Stack */}
        <div className="card flex h-auto min-h-[22.5vh] w-full flex-col justify-center gap-4 py-6 hover:z-50 bg-[#161616] border-[1px] border-[#262626] rounded-3xl px-6">
          <h1 className="text-left text-4xl sm:text-4xl font-[bold] tracking-tight">
            STACK.
          </h1>
          <div className="card relative flex flex-wrap items-center justify-start min-h-[80px] w-full gap-3 px-4 py-3 border-[1px] border-[#262626] rounded-3xl">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
              <img
                src="/Icons/react.png"
                alt="react"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
              <img
                src="/Icons/js.png"
                alt="js"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Normal icons */}
            {["framer", "github", "vscode", "notion", "figma", "discord"].map(
              (icon, idx) => (
                <div
                  key={idx}
                  className="flex items-end justify-center w-10 h-10 sm:w-12 sm:h-12 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300"
                >
                  <img
                    src={`/Icons/${icon}.png`}
                    alt={icon}
                    className="w-full h-full object-contain"
                  />
                </div>
              )
            )}

            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
              <img
                src="/Icons/tailwind.png"
                alt="tailwind"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 origin-bottom hover:scale-[1.35] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300">
              <img
                src="/Icons/gsap.png"
                alt="gsap"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* 6. Links (Hidden on mobile, visible on tablet) */}
        <div className="hidden sm:flex md:hidden flex-col justify-between h-auto w-full p-4 rounded-3xl">
          {/* Top row */}
          <div className="flex items-center justify-center gap-x-4 gap-y-4 mb-4">
            {/* Text LINKS */}
            <div className="text-3xl font-extrabold font-[bold] text-[#D9D9D9] leading-none">
              LIN
              <br />
              KS.
            </div>

            {/* 2 Logos */}
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/Icons/behance.svg"
                alt="Behance"
                className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>

            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/Icons/dribble.svg"
                alt="Dribbble"
                className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-center gap-x-4">
            {/* 3 Logos */}
            <a
              href="https://www.instagram.com/mustafaaa.ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/Icons/nsta.svg"
                alt="Instagram"
                className="w-14 h-14 object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mustafa-ali-a7736b218/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/Icons/linkdin.svg"
                alt="LinkedIn"
                className="w-14 h-14 object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>

            <a
              href="https://github.com/Mustafa-ali20"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="/Icons/github.svg"
                alt="GitHub"
                className="w-14 h-14 object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        </div>

        {/* 7. Recent Works */}
        <div className="card h-[41.5vh] w-full cursor-pointer p-5 focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl">
          <h1 className="text-4xl sm:text-4xl font-extrabold font-[bold] leading-none uppercase">
            Recent <br /> Works.
          </h1>
          <div className="mt-6 flex flex-col font-[bold] gap-4">
            <div>
              <div className="flex items-center justify-between leading-none gap-2">
                <p className="text-base sm:text-lg">Taher FIlms</p>
                <p className="text-sm sm:text-base">Oct-2025</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.taherfilms.site/"
                className="font-[light] flex items-center gap-2 text-sm text-[#D9D9D9]"
              >
                Taherfilms.site
                <ArrowUpRight size={15} className="" />
              </a>
            </div>
            <div>
              <div className="flex items-center justify-between leading-none  gap-2">
                <p className="text-base sm:text-lg">K72 Clone</p>
                <p className="text-sm sm:text-base">Aug-2025</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://k72-agency.vercel.app/"
                className="font-[light] flex items-center gap-2 text-sm text-[#D9D9D9]"
              >
                mustafa-vercel <ArrowUpRight size={15} />
              </a>
            </div>
            <div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-base sm:text-lg">Movie site</p>
                <p className="text-sm sm:text-base">Jul-2025</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://scsdb-movieweb.vercel.app/"
                className="font-[light] flex items-center gap-2 text-sm text-[#D9D9D9]"
              >
                mustafa-vercel <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* 8. Hobbies */}
        <div className="card relative h-[27.9vh] w-full hover:z-50 bg-[#161616] border-[1px] border-[#262626] rounded-3xl p-6">
          <h2 className="text-4xl sm:text-4xl font-[bold] mb-4 text-white">
            Hobbies
          </h2>
          <ul className="list-disc list-inside font-[variable] text-gray-300 text-base sm:text-lg space-y-1">
            <li>Video Games 🎮</li>
            <li>Travel ✈️</li>
            <li>Outing 🌆</li>
            <li>Cooking 🍳</li>
            <li>Football ⚽</li>
          </ul>
        </div>

        {/* 9. Schedule Call */}
        <div className="card h-[5.6vh] min-h-[60px] w-full cursor-pointer transition-all duration-200 ease-out hover:scale-90 focus:z-[99px] bg-[#161616] border-[1px] border-[#262626] rounded-3xl">
          <div className="flex items-center justify-center gap-3 font-[bold] text-base sm:text-lg p-4">
            <Calendar size={20} />
            <a
              href="https://cal.com/mustafa-aly"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

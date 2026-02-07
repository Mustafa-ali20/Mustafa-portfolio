import React, { useState, useEffect } from "react";
import { Waypoints, Calendar, ArrowUpRight } from "lucide-react";
import "./About.css";
import Transition from "../animation/Transition";

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
    <div className="about-container ">
      {/* Desktop Layout */}
      <div className="desktop-layout">
        {/* Column 1 */}
        <div className="column-one">
          <div className="photo-card">
            <img src="/Images/me.jpeg" alt="" />
          </div>
          <div className="aka-card">
            <h1>AKA.</h1>
            <p>
              "The guy with football on screen, dumbbells in hand, and friends
              around — that's my favorite combo, because life's better loud and
              active."
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="column-two">
          <div className="intro-card">
            <h1>
              I'm a Front-End <br />
              <span>Developer</span>
            </h1>
            <p>
              My journey in the world of coding began a year ago with a spark of
              curiosity for how things work on the web. From those first steps
              of trial and error to building full projects today, I have shaped
              my skills into creating experiences that connect ideas with
              people. Blending logic with creativity, I strive to craft work
              that feels seamless, functional, and alive. Let's build something
              that stands out.
            </p>
          </div>

          <div className="row-wrapper">
            <div className="skills-card">
              <div className="skills-header">
                <h2>SKILLS.</h2>
                <div>
                  <Waypoints size={35} />
                </div>
              </div>
              <ul>
                <li>Front-End Developer</li>
                <li>UI/UX Designer</li>
                <li>React Developer</li>
                <li>Interactive UI Design</li>
                <li>Web Animation (GSAP, Framer Motion)</li>
              </ul>
            </div>

            <div className="time-card">
              <h1 className="time">{formatTime(currentTime)}</h1>
              <h1 className="date">{formatDate(currentTime)}</h1>
            </div>
          </div>

          <div className="stack-card">
            <h1>STACK.</h1>
            <div className="stack-icons">
              <div className="icon-wrapper small">
                <img src="/Icons/react.png" alt="react" />
              </div>
              <div className="icon-wrapper small">
                <img src="/Icons/js.png" alt="js" />
              </div>
              {["framer", "github", "vscode", "figma", "discord"].map(
                (icon, idx) => (
                  <div key={idx} className="icon-wrapper">
                    <img src={`/Icons/${icon}.png`} alt={icon} />
                  </div>
                )
              )}
              <div className="icon-wrapper small">
                <img src="/Icons/gsap.png" alt="gsap" />
              </div>
              <div className="icon-wrapper small">
                <img src="/Icons/tailwind.png" alt="tailwind" />
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="column-three">
          <div className="links-section">
            <div className="links-top">
              <div className="links-text">
                LIN
                <br />
                KS.
              </div>
              <a
                href="https://www.instagram.com/mustafaaa.ali/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Icons/nsta.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/mustafa-ali-a7736b218/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Icons/linkdin.svg" alt="LinkedIn" />
              </a>
            </div>

            <div className="links-bottom">
              <a
                href="https://github.com/Mustafa-ali20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Icons/github.svg" alt="GitHub" />
              </a>
               <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Icons/behance.svg" alt="Behance" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Icons/dribble.svg" alt="Dribbble" />
              </a>
            </div>
          </div>

          <div className="works-card">
            <h1>
              RECENT <br /> WORKS.
            </h1>
            <div className="works-list">
              <div className="work-item">
                <div className="work-header">
                  <p className="work-title">Taher Films</p>
                  <p className="work-date">Oct-2025</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.taherfilms.site/"
                >
                  Taherfilms.site
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="work-item">
                <div className="work-header">
                  <p className="work-title">K72 Clone</p>
                  <p className="work-date">Aug-2025</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://k72-agency.vercel.app/"
                >
                  mustafa-vercel <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="work-item">
                <div className="work-header">
                  <p className="work-title">Movie Site</p>
                  <p className="work-date">Jul-2025</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://scsdb-movieweb.vercel.app/"
                >
                  mustafa-vercel <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="hobbies-card">
            <h2>Hobbies</h2>
            <ul>
              <li>Video Games 🎮</li>
              <li>Travel ✈️</li>
              <li>Outing 🌆</li>
              <li>Cooking 🍳</li>
              <li>Football ⚽</li>
            </ul>
          </div>

          <div className="schedule-card">
            <Calendar size={22} />
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

      {/* Mobile & Tablet Layout */}
      <div className="mobile-layout">
        <div className="photo-card">
          <img src="/Images/me.jpeg" alt="" />
        </div>

        <div className="aka-card">
          <h1>AKA.</h1>
          <p>
            "The guy with football on screen, dumbbells in hand, and friends
            around — that's my favorite combo, because life's better loud and
            active."
          </p>
        </div>

        <div className="intro-card">
          <h1>
            I'm a Front-End <br />
            <span>Developer</span>
          </h1>
          <p>
            My journey in the world of coding began a year ago with a spark of
            curiosity for how things work on the web. From those first steps of
            trial and error to building full projects today, I have shaped my
            skills into creating experiences that connect ideas with people.
            Blending logic with creativity, I strive to craft work that feels
            seamless, functional, and alive. Let's build something that stands
            out.
          </p>
        </div>

        <div className="row-wrapper">
          <div className="skills-card">
            <div className="skills-header">
              <h2>SKILLS.</h2>
              <Waypoints size={32} />
            </div>
            <ul>
              <li>Front-End Developer</li>
              <li>UI/UX Designer</li>
              <li>React Developer</li>
              <li>Interactive UI Design</li>
              <li>Web Animation (GSAP, Framer Motion)</li>
            </ul>
          </div>
          <div className="time-card">
            <h1 className="time">{formatTime(currentTime)}</h1>
            <h1 className="date">{formatDate(currentTime)}</h1>
          </div>
        </div>

        <div className="stack-card">
          <h1>STACK.</h1>
          <div className="stack-icons">
            <div className="icon-wrapper small">
              <img src="/Icons/react.png" alt="react" />
            </div>
            <div className="icon-wrapper small">
              <img src="/Icons/js.png" alt="js" />
            </div>
            {["framer", "github", "vscode", "figma", "discord"].map(
              (icon, idx) => (
                <div key={idx} className="icon-wrapper">
                  <img src={`/Icons/${icon}.png`} alt={icon} />
                </div>
              )
            )}
            <div className="icon-wrapper small">
              <img src="/Icons/tailwind.png" alt="tailwind" />
            </div>
            <div className="icon-wrapper small">
              <img src="/Icons/gsap.png" alt="gsap" />
            </div>
          </div>
        </div>

        <div className="works-card">
          <h1>
            RECENT <br /> WORKS.
          </h1>
          <div className="works-list">
            <div className="work-item">
              <div className="work-header">
                <p className="work-title">Taher Films</p>
                <p className="work-date">Oct-2025</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.taherfilms.site/"
              >
                Taherfilms.site
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="work-item">
              <div className="work-header">
                <p className="work-title">K72 Clone</p>
                <p className="work-date">Aug-2025</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://k72-agency.vercel.app/"
              >
                mustafa-vercel <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="work-item">
              <div className="work-header">
                <p className="work-title">Movie Site</p>
                <p className="work-date">Jul-2025</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://scsdb-movieweb.vercel.app/"
              >
                mustafa-vercel <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="hobbies-card">
          <h2>Hobbies</h2>
          <ul>
            <li>Video Games 🎮</li>
            <li>Travel ✈️</li>
            <li>Outing 🌆</li>
            <li>Cooking 🍳</li>
            <li>Football ⚽</li>
          </ul>
        </div>

        <div className="schedule-card">
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
  );
}

export default Transition(About);
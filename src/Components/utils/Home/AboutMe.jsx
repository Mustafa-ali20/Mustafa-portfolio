import React from "react";
import "./AboutMe.css";
import { useNavigate } from "react-router-dom";
import DecryptedText from "../../animation/DecryptedText";

const AboutMe = () => {
  const navigate = useNavigate();

  const descriptionLines = [
    "HI, I'M MUSTAFA - A CREATIVE FRONTEND DEVELOPER.",
    "MY FOCUS IS ON BUILDING SLEEK, ANIMATED, AND IMMERSIVE EXPERIENCES",
    "THAT TRANSFORM SIMPLE WEBSITES INTO SOMETHING EXTRAORDINARY.",
  ];

  return (
    <div className="about-me">
      {/* Main Content */}
      <main className="main-content">
        {/* Background Text - Left Side */}
        <div className="bg-text-left">
          <div className="bg-text-item">FUNDAM</div>
          <div className="bg-text-item">ENTALS</div>
        </div>

        {/* Background Text - Right Side */}
        <div className="bg-text-right">
          <div className="bg-text-item">OF WEB</div>
          <div className="bg-text-item">DEVELOP</div>
          <div className="bg-text-item">MENT</div>
        </div>

        {/* Center Portrait */}
        <div className="portrait-container">
          <div className="portrait">
            {/* Placeholder for the portrait image */}
            <div className="portrait-placeholder">
              <img
                className="w-full h-full object-scale-down object-top select-none"
                src="/Images/Mustafa.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="description">
          {descriptionLines.map((line, index) => (
            <p key={index} className="description-line">
              <DecryptedText
                text={line}
                animateOn="view"
                maxIterations={5}
                speed={60}
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
              />
            </p>
          ))}
        </div>

        <button onClick={() => navigate("/about")} className="cta-button">
          ABOUT ME
        </button>
      </main>
    </div>
  );
};

export default AboutMe;

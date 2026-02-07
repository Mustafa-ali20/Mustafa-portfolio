import React from "react";
import Name from "../utils/Home/Name";
import AboutMe from "../utils/Home/AboutMe";
import Tools from "../utils/Home/Tools";
import Transition from "../animation/Transition";
import ProjectsShowcase from "../utils/Home/ProjectsShowcase";
import Contact from "./Contact";
import Trail from "../utils/Home/Trail";

function Home() {
  return (
    <div>
      <Name />
      <AboutMe />
      <ProjectsShowcase />
      <Tools />
      <Contact />
      <Trail />
    </div>
  );
}

export default Transition(Home);

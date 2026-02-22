import React from "react";
import Transition from "../animation/Transition";
import MainProjects from "../utils/Projects/MainProjects";

function Projects() {

  return (
    <div>
      <MainProjects />
    </div>
  );
}

export default Transition(Projects);

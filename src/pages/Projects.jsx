import React from "react";
import ProjectItem from "../components/ProjectItem";
import PropTypes from "prop-types";
import "../styles/Projects.css";
import { projectList } from "../helpers/ProjectList";
import { isMobile } from "react-device-detect";

function Projects(props) {
  return (
    <div className="projects" >
      <h3 id="proyectos" style={{color:'#3e497a', fontSize: isMobile ? '36px': '60px'}}>Projects</h3>
      <div className="projectList">
        {projectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

Projects.propTypes = {};

export default Projects;

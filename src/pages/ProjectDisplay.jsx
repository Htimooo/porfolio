import React from "react";
import { useParams } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import '../styles/ProjectDisplay.css';
import PropTypes from "prop-types";
import { projectList } from "../helpers/ProjectList";

function ProjectDisplay(props) {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '10rem' }}>
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <OpenInBrowserIcon />
  </a>
  <a href={project.github} target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
  </a>
</div> </div> 
  );
}

ProjectDisplay.propTypes = {};

export default ProjectDisplay;

import React from 'react';
import ProjectItem from '../components/ProjectItem';
import PropTypes from 'prop-types';
import '../styles/Projects.css';
import { projectList } from '../helpers/ProjectList';

function Projects(props) {
  return (
    <div className='projects'>

      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project, idx)=>{
return <ProjectItem key={idx} id={idx} name={project.name}  image={project.image} />

        })}


      </div>
    </div>
  )
}

Projects.propTypes = {}

export default Projects

import React from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types'

function ProjectItem(props) {
    const {name, image, id} = props
    const navigate = useNavigate();

  return (
    <div className='projectItem' onClick={()=>{ navigate('/project/'+id)}}>
<div style={{backgroundImage:`url(${image})`}} className='bgImage'/>
<h1>{name}</h1>
    </div>
    
  )
}

ProjectItem.propTypes = {}

export default ProjectItem

import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

function ProjectItem(props) {
  const { name, image, id } = props;
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
     
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius:'15px'
        }}
      ></div>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
       <div style={{
          position: "absolute",
          left: '37%',
          top: '45%',
         zIndex:20, color:'#fafafa'
        }}><h3>{name}</h3>
        <Button  onClick={() => {
        navigate("/project/" + id);
      }} color='inherit' variant="outlined">Ver más</Button>
        </div>
    </div>
  );
}

ProjectItem.propTypes = {};

export default ProjectItem;

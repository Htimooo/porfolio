import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomHashLink from './CustomHashLink';

function Navbar(props) {
  const [expandedNavbar, setExpandedNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Va una página atrás en el historial
  };

  useEffect(() => {
    setExpandedNavbar(false);
    console.log("location", location);
  }, [location]);

  return (
    <div className="navbar" id={expandedNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <IconButton
          onClick={() => {
            setExpandedNavbar((prev) => !prev);
          }}
        >
          {expandedNavbar ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <IconButton onClick={handleBack}>
          {location.pathname === '/' || location.pathname === '/#' ? "" : <ArrowBackIcon />}
        </IconButton>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <CustomHashLink smooth to="/#proyectos">Projects</CustomHashLink>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;

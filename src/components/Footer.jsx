import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
import PropTypes from "prop-types";

function Footer(props) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="mailto:hugotimote87@gmail.com?subject=Contacto%20desde%20Github" target="_blank" rel="noopener noreferrer">
          <EmailOutlinedIcon />
        </a>
        <a href="https://www.linkedin.com/in/hugo-andres-timote-496ba219a/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Htimooo" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.instagram.com/htimooo8/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
      <p> &copy; {currentYear} hugoandres.dev.uy</p>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;

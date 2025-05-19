import React from "react";
import PropTypes from "prop-types";
import "../styles/Home.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Projects from "./Projects";
import yo from "../assets/yo.jpg"
import { isMobile } from "react-device-detect";

function Home(props) {
  return (
    <div className="home">
      <div className="about">
        <div style={{borderRadius:'50%',overflow:'hidden',width: isMobile? '200px':'250px', height: isMobile? '200px':'250px', marginBottom:'40px', border:'solid 10px #e9d35b'}}><img style={{width:'100%'}}src={yo} alt="hugo-andres-timote" /></div>
        <h2> Hi! I´m Hugo Andrés Timote and this is my portfolio</h2>
        <div className="prompt">
          <p>Software developer with passion for lerning and creating</p>
          <a
            href="https://www.linkedin.com/in/hugo-andres-timote-496ba219a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ cursor: "pointer" }} />{" "}
          </a>
          <a
            href="https://github.com/Htimooo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ cursor: "pointer" }} />
          </a>
        </div>
      </div>
      <div className="skills">
        {" "}
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Javascript, React JS, Angular</span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span> Node JS, .Net, JAVA, </span>
          </li>

          <li className="item">
            <h2>Database</h2>
            <span>MySQL, MongoDB, PostgreSQL, Oracle, SQL Server. </span>
          </li>
          <li className="item">
            <h2>Design</h2>
            <span>Figma, Photoshop, Adobe XD, Corel Draw</span>
          </li>
        </ol>
      </div>
      <Projects />
    </div>
  );
}

Home.propTypes = {};

export default Home;

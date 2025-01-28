import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Home.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Home(props) {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, welcome to my portfolio</h2>
        <div className='prompt'>
        <p>Software developer with passion for lerning and creating</p>  
          <LinkedInIcon/> <EmailOutlinedIcon/> <GitHubIcon/>
        </div>
      </div>
      <div className='skills'> <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>React Js, Redux, HTML, CSS, PHP, Bootstrap, Material UI, Yarn, NPM</span>
        </li>

        <li className="item">
          <h2>Back-End</h2>
          <span> Node JS, Express JS, .Net, JAVA EE, MySQL, MongoDB </span>
        </li>

        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript,C#, Php, JAVA</span>
        </li>
        <li className="item">
          <h2>Design</h2>
          <span>Figma, Photoshop, Adobe XD, Corel Draw</span>
        </li>


      </ol>
      
      </div>

    </div>
  )
}

Home.propTypes = {}

export default Home

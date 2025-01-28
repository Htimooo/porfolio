import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'
import PropTypes from 'prop-types';

function Footer(props) {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
       <div className='socialMedia'><EmailOutlinedIcon/><LinkedInIcon/><GitHubIcon/><InstagramIcon/></div>
<p> &copy; {currentYear}  hugoandres.dev.uy</p>
    </div>
  )
}

Footer.propTypes = {}

export default Footer

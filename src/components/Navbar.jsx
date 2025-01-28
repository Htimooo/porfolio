import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Navbar.css'
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(props) {
  const [expandedNavbar, setExpandedNavbar]= useState(false);
  const location = useLocation();

  useEffect(() => {
   setExpandedNavbar(false)
  }, [location])
  
  return (
    <div className='navbar'id ={expandedNavbar ? 'open' : 'close'}>
      
      <div className='toggleButton'>
        <IconButton onClick={()=> {setExpandedNavbar((prev)=>!prev)}}>
        {expandedNavbar ? <CloseIcon/> : <MenuIcon/>}  
        </IconButton>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experience'>Experience</Link>
        </div>      
       </div>
  )
}

Navbar.propTypes = {}

export default Navbar

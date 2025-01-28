import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css'
import PropTypes from 'prop-types';

function Experience(props) {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date= '2019'
      iconStyle={{background:'#3e497a', color:'#fff'}}
      icon={<SchoolOutlinedIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>UTEC</h3>
        <p> Universidad tecnológica del Uruguay</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date= '2019'
      iconStyle={{background:'#e9d35b', color:'#fff'}}
      icon={<WorkIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Freenlancer</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date= '2021'
      iconStyle={{background:'#e9d35b', color:'#fff'}}
      icon={<WorkIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Mebilor S.A</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date= '2019'
      iconStyle={{background:'#e9d35b', color:'#fff'}}
      icon={<WorkIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>Start my company</h3>
      </VerticalTimelineElement>

      </VerticalTimeline></div>
  )
}

Experience.propTypes = {}

export default Experience

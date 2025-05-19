import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkIcon from "@mui/icons-material/Work";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

function Experience(props) {
  return (
    <div
      style={{ height: 'auto'}}
    >
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Mebilor S.A</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - cursando"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">UTEC</h3>
          <p> Universidad tecnológica del Uruguay</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - actualidad"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Freenlancer</h3>
          <p> Programación y Marketin Digital</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - actualidad"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Técnico Administración de Empresas</h3>
          <p> UDELAR </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Diseño gráfico</h3>
          <p> UTU- Comunicación y Diseño Gráfico</p>
        </VerticalTimelineElement>

      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachillerato</h3>
          <p> Liceo 34 Montevideo</p>
        </VerticalTimelineElement>

       

       

      

        

        

      </VerticalTimeline>
    </div>
  );
}

Experience.propTypes = {};

export default Experience;

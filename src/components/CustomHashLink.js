// src/components/CustomHashLink.js
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import React from 'react';
import { isMobile } from 'react-device-detect';

export const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = isMobile ? -900 : -100; // Altura del navbar (ajustá según tu barra)
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export default function CustomHashLink(props) {
  return <HashLink scroll={scrollWithOffset} {...props} />;
}

import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23">
    <path d="M24,0.2 C23.4,0.2 23,0.6 23,1.2 L23,10.2 L14,10.2 C13.4,10.2 13,10.6 13,11.2 C13,11.8 13.4,12.2 14,12.2 L23,12.2 L23,21.2 C23,21.8 23.4,22.2 24,22.2 C24.6,22.2 25,21.8 25,21.2 L25,12.2 L34,12.2 C34.6,12.2 35,11.8 35,11.2 C35,10.6 34.6,10.2 34,10.2 L25,10.2 L25,1.2 C25,0.6 24.6,0.2 24,0.2 Z" transform="translate(-13)"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Plus');
Icon.Svg = Svg;

export default Icon;

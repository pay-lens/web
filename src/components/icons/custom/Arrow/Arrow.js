import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 72">
    <path d="M3.5,38.5 L35.4,70.4 C36.8,71.8 39,71.8 40.3,70.4 C41.7,69 41.7,66.8 40.3,65.5 L14.3,39.5 L94,39.5 C95.9,39.5 97.5,37.9 97.5,36 C97.5,34.1 95.9,32.5 94,32.5 L14.4,32.5 L40.4,6.5 C41.8,5.1 41.8,2.9 40.4,1.6 C39.7,0.9 38.8,0.6 37.9,0.6 C37,0.6 36.1,0.9 35.4,1.6 L3.5,33.5 C2.8,34.2 2.5,35 2.5,36 C2.5,37 2.9,37.8 3.5,38.5 Z" transform="translate(-2)"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Arrow');
Icon.Svg = Svg;

export default Icon;

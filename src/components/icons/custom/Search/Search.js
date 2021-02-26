import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
    <path d="M96.3,88.7 L73.4,65.8 C79,58.9 82.4,50.1 82.4,40.5 C82.4,18.5 64.5,0.5 42.4,0.5 C20.3,0.5 2.4,18.4 2.4,40.5 C2.4,62.6 20.3,80.5 42.4,80.5 C52,80.5 60.8,77.1 67.7,71.5 L90.6,94.4 C91.4,95.2 92.4,95.6 93.4,95.6 C94.4,95.6 95.4,95.2 96.2,94.4 C97.9,92.8 97.9,90.2 96.3,88.7 Z M42.5,72.5 C24.9,72.5 10.5,58.1 10.5,40.5 C10.5,22.9 24.9,8.5 42.5,8.5 C60.1,8.5 74.5,22.9 74.5,40.5 C74.5,58.1 60.1,72.5 42.5,72.5 Z" transform="translate(-2)"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Search');
Icon.Svg = Svg;

export default Icon;

import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 60">
    <path d="M45,60 L1,60 C0.448,60 0,59.553 0,59 L0,1 C0,0.447 0.448,0 1,0 L45,0 C45.552,0 46,0.447 46,1 L46,59 C46,59.553 45.552,60 45,60 Z M2,58 L44,58 L44,2 L2,2 L2,58 Z"/>
    <path d="M12 15C9.243 15 7 12.757 7 10 7 7.243 9.243 5 12 5 14.757 5 17 7.243 17 10 17 12.757 14.757 15 12 15zM12 7C10.346 7 9 8.346 9 10 9 11.654 10.346 13 12 13 13.654 13 15 11.654 15 10 15 8.346 13.654 7 12 7zM19 24L17 24C17 21.243 14.757 19 12 19 9.243 19 7 21.243 7 24L5 24C5 20.141 8.14 17 12 17 15.86 17 19 20.141 19 24zM40 16L22 16C21.448 16 21 15.553 21 15L21 7C21 6.447 21.448 6 22 6L40 6C40.552 6 41 6.447 41 7L41 15C41 15.553 40.552 16 40 16zM23 14L39 14 39 8 23 8 23 14zM24 55L6 55C5.448 55 5 54.553 5 54L5 48C5 47.447 5.448 47 6 47L24 47C24.552 47 25 47.447 25 48L25 54C25 54.553 24.552 55 24 55zM7 53L23 53 23 49 7 49 7 53z"/>
    <rect width="20" height="2" x="21" y="18"/>
    <rect width="20" height="2" x="21" y="22"/>
    <rect width="14" height="2" x="27" y="48"/>
    <rect width="14" height="2" x="27" y="52"/>
    <rect width="36" height="2" x="5" y="27"/>
    <rect width="36" height="2" x="5" y="31"/>
    <rect width="36" height="2" x="5" y="35"/>
    <rect width="36" height="2" x="5" y="39"/>
    <rect width="36" height="2" x="5" y="43"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Resume');
Icon.Svg = Svg;

export default Icon;

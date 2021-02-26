import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 88">
    <path d="M63,0 L1,0 C0.448,0 0,0.448 0,1 L0,87 C0,87.552 0.448,88 1,88 L63,88 C63.552,88 64,87.552 64,87 L64,1 C64,0.448 63.552,0 63,0 Z M62,86 L2,86 L2,2 L62,2 L62,86 Z"/>
    <path d="M56,82 L58,82 L58,80 L58,8 L58,6 L56,6 L44.5,6 L44.5,5 C44.5,4.173 43.827,3.5 43,3.5 L21,3.5 C20.173,3.5 19.5,4.173 19.5,5 L19.5,6 L8,6 L6,6 L6,8 L6,80 L6,82 L8,82 L56,82 Z M21,11 L21,8 L43,8 L43,11 L40,11 L40,11.5 L24,11.5 L24,11 L21,11 Z M20.5,5 C20.5,4.725 20.724,4.5 21,4.5 L43,4.5 C43.276,4.5 43.5,4.725 43.5,5 L43.5,6 L20.5,6 L20.5,5 Z M8,8 L19,8 L19,11 C19,12.103 19.897,13 21,13 L24,13 L24,12.5 L40,12.5 L40,13 L43,13 C44.103,13 45,12.103 45,11 L45,8 L56,8 L56,80 L8,80 L8,8 Z"/>
    <rect width="32" height="2" x="16" y="19"/>
    <rect width="32" height="1" x="16" y="27.5"/>
    <rect width="28" height="1" x="16" y="31.5"/>
    <rect width="32" height="1" x="16" y="35.5"/>
    <rect width="24" height="1" x="16" y="39.5"/>
    <rect width="32" height="1" x="16" y="43.5"/>
    <rect width="32" height="1" x="16" y="55.5"/>
    <rect width="28" height="1" x="16" y="59.5"/>
    <rect width="12" height="1" x="16" y="67.5"/>
    <rect width="28" height="1" x="16" y="47.5"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Clipboard');
Icon.Svg = Svg;

export default Icon;

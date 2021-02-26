import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 227">
    <path d="M306,87 C336,97 356,125 356,156 C356,195 323,227 284,227 L72,227 C32,227 0,195 0,156 C0,119 27,88 64,84 C68,59 84,39 107,30 C129,21 154,23 173,36 C191,3 228,-7 261,5 C295,18 315,51 306,87 Z M294,102 C289,101 286,95 287,90 C299,60 285,32 255,21 C226,10 197,21 185,51 C183,57 176,59 171,55 C155,41 133,37 114,45 C94,53 81,71 80,92 C80,97 76,101 71,101 C41,101 17,125 17,156 C17,186 42,211 72,211 L284,211 C314,211 339,186 339,156 C339,129 320,107 294,102 Z"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Cloud');
Icon.Svg = Svg;

export default Icon;

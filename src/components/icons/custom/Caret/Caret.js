import React from 'react';
import createSvgIcon from '../../utils/createSvgIcon';

const source = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20">
    <path d="M0.5,-1.77635684e-15 C0.2,-1.77635684e-15 0.112,0.206 0.312,0.406 L15.687,19.594 C15.887,19.794 16.112,19.794 16.312,19.594 L31.687,0.406 C31.887,0.206 31.8,-1.77635684e-15 31.499,-1.77635684e-15 L0.499,-1.77635684e-15 L0.5,-1.77635684e-15 Z"/>
  </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'Caret');
Icon.Svg = Svg;

export default Icon;

import React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const source = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 17">
        <path d="M10.37,12.87 L4.72,12.87 L3.65,16.09 L0.22,16.09 L6.04,0.45 L9.03,0.45 L14.88,16.09 L11.45,16.09 L10.37,12.87 Z M5.59,10.26 L9.5,10.26 L7.54,4.4 L5.59,10.26 Z" />
    </svg>
);

const Svg = source();
const Icon = createSvgIcon(Svg, 'A');
Icon.Svg = Svg;

export default Icon;

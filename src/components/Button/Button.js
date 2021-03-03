import React from 'react';
import styled from 'styled-components';

import { pxToEm } from '../../styles/utils/converters';
import colors from '../../styles/colorPalette';

const ButtonBase = styled.button`
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  height: ${pxToEm(44)};
  padding: 0 ${pxToEm(22)};
  transition: background 0.3s ease, box-shadow 0.3s ease;

  :hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background: ${colors.pink.hex};
  border: none;
  color: ${colors.white.hex};

  :hover {
    background: rgba(${colors.pink.rgb}, 0.9);
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  border: 2px solid ${colors.pink.hex};
  color: ${colors.pink.hex};
`;

const TertiaryButton = styled(ButtonBase)`
  background: transparent;
  border: none;
  color: ${({ color }) => color || colors.white.hex};
  font-weight: ${({ color }) => (color === colors.pink.hex) ? 600 : 500};

  :hover {
    box-shadow: none;
    background: rgba(${colors.black.rgb}, 0.1);
  }
`;

const Button = ({ variant, ...rest }) => {
  switch (variant) {
    case 'secondary': {
      return <SecondaryButton {...rest} />;
    }

    case 'tertiary': {
      return <TertiaryButton {...rest} />;
    }

    case 'primary':
    default: {
      return <PrimaryButton {...rest} />;
    }
  }
};

export default Button;

import React from 'react';
import styled from 'styled-components';

import { pxToEm } from '../../styles/utils/converters';
import colors from '../../styles/colorPalette';

const ButtonBase = styled.button`
  border-radius: 2px;
  font-weight: 500;
  height: ${pxToEm(44)};
  padding: 0 ${pxToEm(22)};
`;

const PrimaryButton = styled(ButtonBase)`
  background: ${colors.paradisePink.hex};
  border: none;
  color: ${colors.white.hex};
  font-weight: 600;
`;

const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  border: 1px solid ${colors.paradisePink.hex};
  color: ${colors.paradisePink.hex};
`;

const TertiaryButton = styled(ButtonBase)`
  background: transparent;
  border: none;
  color: ${colors.white.hex};
`;

const Button = ({ color, size, variant, ...rest }) => {
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

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SearchIcon } from '../icons';

import { pxToEm } from '../../styles/utils/converters';
import colors from '../../styles/colorPalette';

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  svg {
    left: 10px;
    position: absolute;
    height: ${pxToEm(20)};
    transform-origin: center;
    transform: scaleX(-1);
    width: auto;

    * {
      fill: ${({ color }) => color};
    }
  }

  input {
    border-color: ${({ color }) => color};
    color: ${({ color }) => color};

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      color: ${({ color }) => color};
      opacity: 1; /* Firefox */
    }

    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: ${({ color }) => color};
    }

    /* Microsoft Edge */
    ::-ms-input-placeholder {
      color: ${({ color }) => color};
    }
  }
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  border-radius: 2px;
  box-sizing: border-box;
  padding-left: ${pxToEm(44)};
  height: ${pxToEm(44)};
  width: 100%;
`;

const Search = ({ className, color, ...rest }) => (
  <SearchWrapper className={className} color={color}>
    <SearchIcon />
    <Input type="text" {...rest} />
  </SearchWrapper>
);

Search.propTypes = {
  color: PropTypes.string,
};
Search.defaultProps = {
  color: colors.text.white.hex,
}

export default Search;

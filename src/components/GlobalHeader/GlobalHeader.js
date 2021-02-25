import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';

import { pxToEm } from '../../styles/utils/converters';
import colors from '../../styles/colorPalette';

const Header = styled.header`
  align-content: center;
  align-items: center;
  background: ${colors.midnightGreenEagle.hex};
  display: flex;
  height: ${pxToEm(50)};
  justify-content: space-between;
  padding: 0 15vw;
`;

const StyledLogo = styled.a`
  align-items: center;
  display: flex;

  svg {
    height: ${pxToEm(44)};
    width: auto;

    * {
      fill: ${colors.white.hex};
    }
  }
`;

const Nav = styled.nav`
  width: 15vw;

  ul {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: space-between;

    a {
      color: ${colors.white.hex};
      display: inline-block;
      line-height: ${pxToEm(50)};
      padding: 0 ${pxToEm(5)};
    }
  }
`;

const Search = styled.input`
  background: transparent;
  border: 1px solid ${colors.white.hex};
  border-radius: 2px;
  box-sizing: border-box;
  height: ${pxToEm(44)};
  width: 20vw;

  /* Chrome, Firefox, Opera, Safari 10.1+ */
  ::placeholder {
    color: ${colors.white.hex};
    opacity: 1; /* Firefox */
  }

  /* Internet Explorer 10-11 */
  :-ms-input-placeholder {
    color: ${colors.white.hex};
  }

  /* Microsoft Edge */
  ::-ms-input-placeholder {
    color: ${colors.white.hex};
  }
`;

const ButtonGroup = styled.div`
  button {
    border-radius: 2px;
    cursor: pointer;
    padding: 0 ${pxToEm(20)};
  }
`;

const GlobalHeader = () => (
  <>
    <Header>
      <div>
        <StyledLogo href="/">
          <Logo />
        </StyledLogo>
        <h1 className="sr-only">WorthAware</h1>
      </div>

      <Nav>
        <ul>
          <li>
            <a href="">Salary</a>
          </li>
          <li>
            <a href="">Rank</a>
          </li>
          <li>
            <a href="">Jobs</a>
          </li>
        </ul>
      </Nav>

      <Search type="text" placeholder="Search Salaries" />

      <ButtonGroup>
        <Button variant="primary" type="button">
          Sign Up
        </Button>
        <Button variant="tertiary" type="button">
          Sign In
        </Button>
      </ButtonGroup>
    </Header>
  </>
);

export default GlobalHeader;

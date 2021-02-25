import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';

import { pxToEm } from '../../styles/utils/converters';
import colors from '../../styles/colorPalette';

const Footer = styled.footer`
  background: ${colors.midnightGreenEagle.hex};
  color: ${colors.white.hex};
  display: flex;
  padding: ${pxToEm(20)} 15vw ${pxToEm(50)};
`;

const StyledLogo = styled(Logo)`
  height: ${pxToEm(44)};
  width: auto;

  * {
    fill: ${colors.white.hex};
  }
`;

const Nav = styled.nav`
  display: flex;

  ul {
    margin-left: ${pxToEm(50)};

    li {
      margin-bottom: ${pxToEm(8)};

      :first-child {
        margin-bottom: ${pxToEm(16)};
      }
    }
  }

  a {
    display: inline-block;
    color: ${colors.white.hex};
    padding: ${pxToEm(3)};
  }
`;

const GlobalFooter = () => (
  <Footer>
    <div>
      <a href="/">
        <StyledLogo />
      </a>
      <h1 className="sr-only">WorthAware</h1>
    </div>

    <Nav>
      <ul>
        <li>
          <strong>Salary</strong>
        </li>
        <li>
          <a href="">By Company</a>
        </li>
        <li>
          <a href="">By Job Title</a>
        </li>
        <li>
          <a href="">By Location</a>
        </li>
        <li>
          <a href="">By Skill</a>
        </li>
        <li>
          <a href="">By School</a>
        </li>
      </ul>

      <ul>
        <li>
          <strong>Jobs</strong>
        </li>
        <li>
          <a href="">JobSense</a>
        </li>
      </ul>

      <ul>
        <li>
          <strong>Worth</strong>
        </li>
        <li>
          <a href="">Raises</a>
        </li>
        <li>
          <a href="">Offers</a>
        </li>
        <li>
          <a href="">Salary Calculator</a>
        </li>
      </ul>
    </Nav>
  </Footer>
);

export default GlobalFooter;

import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';

import { pxToEm } from '../../styles/utils/converters';
import { createTransitionForProperties } from '../../styles/utils/mixins';
import colors from '../../styles/colorPalette';

const Footer = styled.footer`
  background: ${colors.teal.hex};
  box-shadow: 0 2px 15px 1px rgba(${colors.black.rgb}, 0.5);
  color: ${colors.white.hex};
  display: grid;
  grid-template-areas:
    "logo nav"
    "privacy privacy";
  grid-template-columns: 155px auto;
  padding: ${pxToEm(20)} 15vw ${pxToEm(50)};
  ${createTransitionForProperties(['padding'])};

  a {
    display: inline-block;
    color: ${colors.white.hex};
    padding: ${pxToEm(3)};
  }

  @media only screen and (max-width: 1200px) {
    padding: ${pxToEm(20)} 10vw ${pxToEm(50)};
  }

  @media only screen and (max-width: 750px) {
    grid-template-areas:
      "logo"
      "nav"
      "privacy";
    grid-template-columns: auto;
  }

  @media only screen and (max-width: 900px) {
    padding: ${pxToEm(20)} 5vw ${pxToEm(50)};
  }
`;

const LogoWrapper = styled.div`
  grid-area: logo;
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
  grid-area: nav;

  ul {
    margin-left: ${pxToEm(50)};

    li {
      margin-bottom: ${pxToEm(8)};

      :first-child {
        margin-bottom: ${pxToEm(16)};
      }
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;

    ul {
      margin: ${pxToEm(30)} 0 0;
    }
  }
`;

const NoticeList = styled.ul`
  align-content: center;
  align-items: center;
  border-top: 1px solid ${colors.white.hex};
  display: flex;
  font-size: ${pxToEm(12)};
  grid-area: privacy;

  li:not(:first-child) {
    margin-left: ${pxToEm(20)};
  }

  @media only screen and (max-width: 700px) {
    align-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const GlobalFooter = () => (
  <Footer>
    <LogoWrapper>
      <a href="/">
        <StyledLogo />
      </a>
      <h1 className="sr-only">WorthAware</h1>
    </LogoWrapper>

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

    <NoticeList>
      <li><a href="">Privacy</a></li>
      <li><a href="">Terms</a></li>
      <li><a href="">Cookie Notice</a></li>
      <li><a href="">Sitemap</a></li>
      <li>Support: paysa.support@ceridian.com</li>
    </NoticeList>
  </Footer>
);

export default GlobalFooter;

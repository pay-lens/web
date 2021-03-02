import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Search from '../Search/Search';

import { pxToEm } from '../../styles/utils/converters';
import { boxShadow, createTransitionForProperties } from '../../styles/utils/mixins';
import colors from '../../styles/colorPalette';

import useScroll from '../../hooks/useScroll';
import useWindowSize from '../../hooks/useWindowSize';

const Header = styled.header`
  align-content: center;
  align-items: center;
  background: ${({scrollY}) => (scrollY < 80) ? colors.teal.hex : colors.white.hex};
  display: flex;
  height: ${pxToEm(50)};
  justify-content: space-between;
  left: 0;
  padding: ${pxToEm(15)} 15vw;
  position: fixed;
  right: 0;
  top: 0;
  transform-origin: top center;
  transform: ${({ scrollDirection }) => (scrollDirection === 'down' && scrollY >= 80) ? 'translateY(-100%)' : 'translateY(0)'};
  z-index: 401;
  ${({scrollY}) => (scrollY >= 80) ? boxShadow() : ''};
  ${createTransitionForProperties(['padding', 'transform'])};

  a {
    color: ${({scrollY}) => (scrollY < 80) ? colors.text.white.hex : colors.text.black.hex};
  }

  svg * {
    fill: ${({scrollY}) => (scrollY < 80) ? colors.text.white.hex : colors.text.black.hex};
  }

  @media only screen and (max-width: 1200px) {
    padding: ${pxToEm(15)} 10vw;
  }

  @media only screen and (max-width: 900px) {
    padding: ${pxToEm(15)} 5vw;
  }
`;

const HeaderSpacer = styled.div`
  height: ${pxToEm(50)};
  padding: ${pxToEm(15)} 0;
`;

const StyledLogo = styled.a`
  align-items: center;
  display: flex;

  svg {
    height: ${pxToEm(44)};
    width: auto;
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
      display: inline-block;
      line-height: ${pxToEm(50)};
      padding: 0 ${pxToEm(5)};
    }
  }
`;

const ButtonGroup = styled.div`
  button {
    border-radius: 2px;
    cursor: pointer;
    padding: 0 ${pxToEm(20)};
  }
`;

const GlobalHeader = () => {
  const { scrollY, scrollDirection } = useScroll();
  const { width } = useWindowSize();

  return (
    <>
      <Header scrollDirection={scrollDirection} scrollY={scrollY}>
        <div>
          <StyledLogo href="/">
            <Logo />
          </StyledLogo>
          <h1 className="sr-only">WorthAware</h1>
        </div>

        {(width > 815) ? (
          <>
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

            <Search
              placeholder="Search Salaries"
              color={(scrollY < 80) ? colors.text.white.hex : colors.text.black.hex }
            />

            <ButtonGroup>
              <Button variant="primary" type="button">
                Sign Up
              </Button>
              <Button
                color={(scrollY < 80) ? colors.text.white.hex : colors.pink.hex }
                variant="tertiary"
                type="button"
              >
                Sign In
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <div />
        )}
      </Header>

      <HeaderSpacer />
    </>
  );
};

export default GlobalHeader;

import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";

import Link from "next/link";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";
import Search from "../../molecules/Search/Search";
import MobileNav from "../../molecules/MobileNav/MobileNav";

import { pxToEm } from "../../../styles/utils/converters";
import { boxShadow, createTransitionForProperties } from "../../../styles/utils/mixins";
import colors from "../../../styles/colorPalette";

import useScroll from "../../../hooks/useScroll";
import useWindowSize from "../../../hooks/useWindowSize";
import usePrefersDarkMode from "../../../hooks/usePrefersDarkMode";

const innerHeight = 50;
const outerHeight = 80;
const scrollColorHeight = outerHeight + 30;
const scrollHideHeight = outerHeight + 20;

const Theme = {
  light: {
    top: {
      background: "transparent",
      color: colors.text.white.hex,
    },
    scrolled: {
      background: colors.white.hex,
      color: colors.text.black.hex,
    },
  },
  dark: {
    top: {
      background: "transparent",
      color: colors.text.white.hex,
    },
    scrolled: {
      background: colors.teal.hex,
      color: colors.text.white.hex,
    },
  },
};

const Header = styled.header`
  ${({ pathname, scrollDirection, scrollY, theme }) => `
    align-content: center;
    align-items: center;
    background: ${pathname === "/" && scrollY < scrollColorHeight ? theme.top.background : theme.scrolled.background};
    display: flex;
    height: ${pxToEm(innerHeight)};
    justify-content: space-between;
    left: 0;
    padding: ${pxToEm((outerHeight - innerHeight) / 2)} 15vw;
    position: fixed;
    right: 0;
    top: 0;
    transform-origin: top center;
    transform: ${scrollDirection === "down" && scrollY >= scrollHideHeight ? "translateY(-100%)" : "translateY(0)"};
    z-index: 401;
    ${scrollY >= scrollColorHeight ? boxShadow() : ""};
    ${createTransitionForProperties(["background", "padding", "transform"])};

    a {
      color: ${scrollY < scrollColorHeight ? theme.top.color : theme.scrolled.color};
    }

    svg * {
      fill: ${scrollY < scrollColorHeight ? theme.top.color : theme.scrolled.color};
    }

    @media only screen and (max-width: 1200px) {
      padding: ${pxToEm(15)} 10vw;
    }

    @media only screen and (max-width: 942px) {
      padding: ${pxToEm(15)} 5vw;
    }
  `};
`;

const HeaderSpacer = styled.div`
  height: ${pxToEm(innerHeight)};
  padding: ${pxToEm(15)} 0;
`;

const StyledLogo = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;

  svg {
    height: ${pxToEm(44)};
    width: auto;
  }
`;

const Nav = styled.nav`
  flex-grow: 1;
  margin: 0 ${pxToEm(10)} 0 ${pxToEm(20)};
  max-width: 200px;

  ul {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: space-between;

    a {
      display: inline-block;
      line-height: ${pxToEm(innerHeight)};
      padding: 0 ${pxToEm(5)};
      ${createTransitionForProperties(["font-weight"])};

      &.active,
      :hover,
      :active {
        font-weight: 600;
      }
    }
  }
`;

const StyledSearch = styled(Search)`
  flex-grow: 1;
  margin: 0 ${pxToEm(20)} 0 ${pxToEm(10)};
`;

const ButtonGroup = styled.div`
  button {
    border-radius: 2px;
    cursor: pointer;
    padding: 0 ${pxToEm(20)};
  }
`;

const GlobalHeader = () => {
  const { pathname } = useRouter();
  const { scrollY, scrollDirection } = useScroll();
  const { width } = useWindowSize();
  const theme = usePrefersDarkMode() ? "dark" : "light";

  const themeStyles = Theme[theme];

  return (
    <>
      <Header pathname={pathname} scrollDirection={scrollDirection} scrollY={scrollY} theme={themeStyles}>
        <div>
          <Link href="/">
            <StyledLogo>
              <Logo />
            </StyledLogo>
          </Link>
          <h1 className="sr-only">WorthAware</h1>
        </div>

        {width >= 840 ? (
          <>
            <Nav>
              <ul>
                <li>
                  <Link href="/salaries">
                    <a className={pathname === "/salaries" ? "active" : ""}>Salaries</a>
                  </Link>
                </li>
                <li>
                  <Link href="/rank">
                    <a className={pathname === "/rank" ? "active" : ""}>Rank</a>
                  </Link>
                </li>
                <li>
                  <Link href="/jobs">
                    <a className={pathname === "/jobs" ? "active" : ""}>Jobs</a>
                  </Link>
                </li>
              </ul>
            </Nav>

            <StyledSearch placeholder="Search Salaries" color={scrollY < scrollColorHeight ? themeStyles.top.color : themeStyles.scrolled.color} />

            <ButtonGroup>
              <Button variant="primary" type="button">
                Sign Up
              </Button>
              <Button color={scrollY < scrollColorHeight ? themeStyles.top.color : themeStyles.scrolled.color} variant="tertiary" type="button">
                Sign In
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <MobileNav top={outerHeight} />
        )}
      </Header>

      <HeaderSpacer />
    </>
  );
};

export default GlobalHeader;

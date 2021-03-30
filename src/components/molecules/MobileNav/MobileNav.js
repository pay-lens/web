import styled from "styled-components";

import FontAwesomeIcon from "../../icons/FontAwesomeIcon/FontAwesomeIcon";
import Button from "../../atoms/Button/Button";
import Search from "../Search/Search";
import { ChevronIcon } from "../../icons";

import colors from "../../../styles/colorPalette";
import { pxToEm } from "../../../styles/utils/converters";
import { createTransitionForProperties } from "../../../styles/utils/mixins";

import useScroll from "../../../hooks/useScroll";
import useToggle from "../../../hooks/useToggle";
import useWindowSize from "../../../hooks/useWindowSize";
import usePrefersDarkMode from "../../../hooks/usePrefersDarkMode";

const Theme = {
  light: {
    background: colors.white.hex,
    color: colors.text.black.hex,
  },
  dark: {
    background: colors.teal.hex,
    color: colors.text.white.hex,
  },
};

const Slide = styled.div`
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  opacity: 0;
  padding: ${pxToEm(20)} 0;
  position: absolute;
  right: 0;
  top: ${({ top }) => pxToEm(top)};
  transform: translateX(100%);
  visibility: hidden;
  width: 80%;
  ${createTransitionForProperties(["transform", "opacity", "visibility"])};

  &.visible {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    margin-top: ${pxToEm(20)};

    a {
      align-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      min-height: ${pxToEm(44)};
      padding: ${pxToEm(20)} 10%;
      width: 100%;
      ${createTransitionForProperties(["background", "font-weight"])};

      :hover {
        background: rgba(${colors.black.rgb}, 0.1);
        font-weight: 600;
      }

      svg {
        height: 1em;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;

  button {
    width: 50%;
  }
`;

const MobileNav = ({ top }) => {
  const { scrollY, scrollDirection } = useScroll();

  const { width } = useWindowSize();
  const theme = usePrefersDarkMode() ? "dark" : "light";

  const themeStyles = Theme[theme];

  const [isVisible, toggleIsVisible] = useToggle();

  return (
    <>
      <Search placeholder="Search Salaries" color={themeStyles.color} />

      <div>
        <Button variant="tertiary" onClick={toggleIsVisible}>
          <FontAwesomeIcon icon={isVisible ? "times" : "bars"} size="lg" />
        </Button>

        <Slide className={isVisible ? "visible" : ""} background={themeStyles.background} top={top}>
          <ButtonGroup>
            <Button variant="primary" type="button">
              Sign Up
            </Button>
            <Button color={themeStyles.color} variant="tertiary" type="button">
              Sign In
            </Button>
          </ButtonGroup>
          <Nav>
            <ul>
              <li>
                <a href="">
                  <span>Salary</span>
                  <ChevronIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <span>Rank</span>
                  <ChevronIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <span>Jobs</span>
                  <ChevronIcon />
                </a>
              </li>
            </ul>
          </Nav>
        </Slide>
      </div>
    </>
  );
};

export default MobileNav;

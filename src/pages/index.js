import styled from "styled-components";

import Button from "../components/atoms/Button/Button";
import Search from "../components/molecules/Search/Search";

import {
  AimIcon,
  CheckIcon,
  ClipboardIcon,
  CloudComputingIcon,
  DiamondIcon,
  DollarsIcon,
  HandshakeIcon,
  MapIcon,
  MindIcon,
  MoneyMessageIcon,
  ProfileIcon,
  ResumeIcon,
} from "../components/icons";

import { pxToEm } from "../styles/utils/converters";
import { boxShadow, createTransitionForProperties } from "../styles/utils/mixins";
import colors from "../styles/colorPalette";

/**
 * Generic section component for re-use across all off the landing page sections.
 */
const Section = styled.section`
  padding: ${pxToEm(100)} 15vw;
  ${createTransitionForProperties(["padding"])};

  :nth-child(even):not(:last-child) {
    padding-left: 50vw;
  }

  > header {
    margin-bottom: ${pxToEm(30)};
  }

  p {
    max-width: 35vw;
  }

  @media only screen and (max-width: 1200px) {
    padding: ${pxToEm(100)} 10vw;

    :nth-child(even):not(:last-child) {
      padding-left: 40vw;
    }
  }

  @media only screen and (max-width: 800px) {
    :nth-child(even):not(:last-child) {
      padding-left: 15vw;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: ${pxToEm(100)} 5vw;

    :nth-child(even):not(:last-child) {
      padding-left: 45vw;
    }
  }
`;

/**
 * The first section of the landing page.
 */
const Cta = styled(Section)`
  padding-top: ${pxToEm(100)};
  padding-bottom: ${pxToEm(150)};
  position: relative;

  h1,
  h2 {
    margin-bottom: 0.5em;
  }

  h1,
  h2,
  h3 {
    color: ${colors.text.white.hex};
  }

  ::after {
    background: ${colors.teal.hex};
    background: linear-gradient(-6deg, #094d63 10%, ${colors.teal.hex} 45%, #052935 80%);
    content: "";
    height: 135%;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: center;
    transform: skewY(6deg) translateY(-25.5%);
    width: 100vw;
    z-index: -1;
    ${boxShadow()};
  }

  svg * {
    fill: ${colors.text.white.hex};
  }
`;

/**
 * The second section of the landing page.
 */
const SalarySection = styled(Section)`
  position: relative;

  ::after {
    background-repeat: no-repeat;
    background-size: contain;
    background: url("/assets/rocket.png");
    content: "";
    height: 600px;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: left center;
    transform: scale(1) translate(-5vw, -20%);
    width: 639px;
  }

  @media only screen and (max-width: 1200px) {
    ::after {
      transform: scale(0.9) translate(-5vw, -30%);
    }
  }

  @media only screen and (max-width: 950px) {
    ::after {
      transform: scale(0.8) translate(-5vw, -40%);
    }
  }
`;

/**
 * The third section of the landing page.
 */
const WorthSection = styled(Section)`
  position: relative;

  ::after {
    background: url("/assets/worth-card.png");
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    height: 358px;
    width: 359px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transform-origin: center;
    transform: translate(-15vw, 30%);
    max-width: calc(35vw);
    ${createTransitionForProperties(["transform", "max-width"])};
  }

  @media only screen and (max-width: 1200px) {
    ::after {
      transform: translate(-10vw, 30%);
      max-width: calc(40vw);
    }
  }

  @media only screen and (max-width: 900px) {
    ::after {
      transform: translate(-5vw, 30%);
      max-width: calc(45vw);
    }
  }
`;

/**
 * The fourth section of the landing page.
 */
const JobSenseSection = styled(Section)`
  position: relative;

  h1,
  p {
    color: ${colors.text.white.hex};
  }

  ::before {
    background: url("/assets/JobSense.png");
    background-repeat: no-repeat;
    background-size: contain;
    bottom: 0;
    content: "";
    height: 834px;
    left: 0;
    max-height: 470px;
    max-width: calc(30vw);
    position: absolute;
    top: 0;
    transform-origin: center center;
    transform: translate(15vw, 0%);
    width: 670px;
    ${createTransitionForProperties(["transform", "max-width"])};
  }

  ::after {
    background: ${colors.blue.hex};
    background: linear-gradient(0deg, #0f789b 10%, ${colors.blue.hex} 45%, #139cc9 80%, #15aee1 90%);
    content: "";
    height: ${pxToEm(2000)};
    left: 0;
    position: absolute;
    bottom: -16%;
    transform-origin: center;
    transform: skewX(-63deg) translate(32%, -4%);
    ${createTransitionForProperties(["height", "margin", "padding", "transform", "width"])};
    width: ${pxToEm(4000)};
    z-index: -1;
    ${boxShadow()};
  }

  ul li svg * {
    fill: ${colors.text.white.hex};
  }

  @media only screen and (max-width: 1200px) {
    ::before {
      transform: scale(0.9) translate(5vw, 0);
    }

    ::after {
      height: ${pxToEm(1800)};
      transform: skewX(-68deg) translate(32%, -4%);
    }
  }

  @media only screen and (max-width: 950px) {
    ::before {
      transform: scale(0.8) translate(5vw, 0);
    }
  }

  @media only screen and (max-width: 800px) {
    ::after {
      height: ${pxToEm(2000)};
      transform: skewX(-75deg) translate(40%, -4%);
    }
  }
`;

/**
 * The fifth section of the landing page.
 */
const RaisesSection = styled(Section)`
  position: relative;

  ::after {
    background: url("/assets/woman-reading.png");
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    height: 358px;
    width: 359px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transform-origin: center;
    transform: translate(-15vw, 30%);
    max-width: calc(35vw);
    ${createTransitionForProperties(["transform", "max-width"])};
  }

  @media only screen and (max-width: 1200px) {
    ::after {
      transform: translate(-10vw, 30%);
      max-width: calc(40vw);
    }
  }

  @media only screen and (max-width: 900px) {
    ::after {
      transform: translate(-5vw, 30%);
      max-width: calc(45vw);
    }
  }
`;

/**
 * The last section of the landing page.
 */
const SearchSection = styled(Section)`
  background: ${colors.lightGreen.hex};
  background: linear-gradient(0deg, #a5f7e4 10%, ${colors.lightGreen.hex} 45%, #d3fbf2 80%);
  ${boxShadow()};

  p {
    max-width: unset;
  }

  form {
    display: flex;
    justify-content: center;
    margin-top: ${pxToEm(30)};
    padding: 0 10%;
    ${createTransitionForProperties(["padding"])};

    > div:first-child {
      flex-grow: 1;
      margin-right: ${pxToEm(20)};
    }
  }

  @media only screen and (max-width: 800px) {
    form {
      padding: 0;
    }
  }
`;

const IconBulletList = styled.ul`
  li {
    display: flex;

    &:not(:last-child) {
      margin-bottom: ${pxToEm(20)};
    }
  }

  svg {
    height: ${pxToEm(30)};
    margin-right: ${pxToEm(10)};
    max-width: 85%;
    width: auto;

    * {
      fill: ${colors.text.black.hex};
    }
  }
`;

/**
 * A grouping of buttons within a section. Utilized to display buttons alongside each other.
 */
const ButtonGroup = styled.div`
  margin-top: ${pxToEm(30)};

  > button:not(:first-child) {
    margin-left: ${pxToEm(50)};
  }
`;

/**
 * A wrapper around an icon for spacing consistency.
 */
const IconContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  width: ${pxToEm(60)};
`;

/**
 * The landing page, which displays generic information about PayLens.
 *
 * @public
 */
const App = () => (
  <main>
    <Cta>
      <h1>Make the most out of your job</h1>
      <h2>Your personal career advisor</h2>
      <h3>Get paid what you're worth, increase your value, discover new jobs.</h3>

      <ButtonGroup>
        <Button variant="primary" type="button">
          Get Started
        </Button>
      </ButtonGroup>
    </Cta>

    <SalarySection>
      <header>
        <h1>Salaries</h1>
      </header>

      <IconBulletList>
        <li>
          <IconContainer>
            <MapIcon />
          </IconContainer>
          <p>Explore salaries across companies, jobs, and locations (U.S.)</p>
        </li>
        <li>
          <IconContainer>
            <MindIcon />
          </IconContainer>
          <p>Access insightful market data on companies and jobs</p>
        </li>
        <li>
          <IconContainer>
            <CloudComputingIcon />
          </IconContainer>
          <p>Data sourced from employees, companies and recruiters</p>
        </li>
      </IconBulletList>

      <ButtonGroup>
        <Button variant="secondary" type="button">
          Sign Up
        </Button>
      </ButtonGroup>
    </SalarySection>

    <WorthSection>
      <header>
        <h1>Your Worth</h1>
      </header>

      <IconBulletList>
        <li>
          <IconContainer>
            <ProfileIcon />
          </IconContainer>
          <p>Get your personalized salary report card</p>
        </li>
        <li>
          <IconContainer>
            <DiamondIcon />
          </IconContainer>
          <p>Compare your market value based on people like you</p>
        </li>
        <li>
          <IconContainer>
            <HandshakeIcon />
          </IconContainer>
          <p>Get help with negotiating a raise, offer, or find a job</p>
        </li>
      </IconBulletList>

      <ButtonGroup>
        <Button variant="secondary" type="button">
          Sign Up
        </Button>
      </ButtonGroup>
    </WorthSection>

    <JobSenseSection>
      <header>
        <h1>JobSense</h1>
      </header>

      <IconBulletList>
        <li>
          <IconContainer>
            <AimIcon />
          </IconContainer>
          <p>Get matched to jobs that fit your skills</p>
        </li>
        <li>
          <IconContainer>
            <DollarsIcon />
          </IconContainer>
          <p>See what you would earn for every job listing</p>
        </li>
        <li>
          <IconContainer>
            <ResumeIcon />
          </IconContainer>
          <p>Just upload your resume, and we'll match jobs to you</p>
        </li>
      </IconBulletList>

      <ButtonGroup>
        <Button variant="primary" type="button">
          Sign Up
        </Button>
      </ButtonGroup>
    </JobSenseSection>

    <RaisesSection>
      <header>
        <h1>Raises and Offers</h1>
      </header>

      <IconBulletList>
        <li>
          <IconContainer>
            <CheckIcon />
          </IconContainer>
          <p>Find out if you’re due for a raise or promotion</p>
        </li>
        <li>
          <IconContainer>
            <ClipboardIcon />
          </IconContainer>
          <p>Evaluate an offer (or compare multiple offers)</p>
        </li>
        <li>
          <IconContainer>
            <MoneyMessageIcon />
          </IconContainer>
          <p>Get help with negotiating more money</p>
        </li>
      </IconBulletList>

      <ButtonGroup>
        <Button variant="secondary" type="button">
          Get a Raise
        </Button>

        <Button variant="secondary" type="button">
          Evaluate an Offer
        </Button>
      </ButtonGroup>
    </RaisesSection>

    <SearchSection>
      <header>
        <h1>Understand Your Worth</h1>
      </header>

      <p>
        Research salaries by company, job title and location. Sign up with PayLens to get a personalized review of your worth and get matched to
        higher paying jobs.
      </p>

      <form>
        <Search color={colors.text.black.hex} placeholder="Search by company, title, and/or location" />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </form>
    </SearchSection>
  </main>
);

export default App;

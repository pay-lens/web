import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button';

import AimIcon from '../../components/icons/custom/Aim/Aim';
import CheckIcon from '../../components/icons/custom/Check/Check';
import ClipboardIcon from '../../components/icons/custom/Clipboard/Clipboard';
import CloudIcon from '../../components/icons/custom/Cloud/Cloud';
import DiamondIcon from '../../components/icons/custom/Diamond/Diamond';
import DollarsIcon from '../../components/icons/custom/Dollars/Dollars';
import HandshakeIcon from '../../components/icons/custom/Handshake/Handshake';
import MapIcon from '../../components/icons/custom/Map/Map';
import MindIcon from '../../components/icons/custom/Mind/Mind';
import MoneyMessageIcon from '../../components/icons/custom/MoneyMessage/MoneyMessage';
import ProfileIcon from '../../components/icons/custom/Profile/Profile';
import ResumeIcon from '../../components/icons/custom/Resume/Resume';

import { pxToEm } from '../../styles/utils/converters';
import colors from '../../styles/colorPalette';

const Landing = styled.main`
  section {
    padding: ${pxToEm(100)} 15vw ${pxToEm(100)};

    :first-child {
      color: ${colors.text.white.hex};
      padding-top: ${pxToEm(100)};
      padding-bottom: ${pxToEm(150)};
      position: relative;

      h1,
      h2 {
        margin-bottom: 0.5em;
      }

      ::after {
        background: ${colors.midnightGreenEagle.hex};
        box-shadow: 0 2px 15px 1px rgba(${colors.black.rgb}, 0.75);
        content: "";
        height: 115%;
        left: 0;
        position: absolute;
        top: 0;
        transform-origin: center;
        transform: skewY(4deg) translateY(-15%);
        width: 100vw;
        z-index: -1;
      }

      svg * {
        fill: ${colors.text.white.hex};
      }
    }

    :nth-child(4) {
      color: ${colors.text.white.hex};
      position: relative;

      ::after {
        background: ${colors.blueNcs.hex};
        box-shadow: 0 2px 15px 1px rgba(${colors.black.rgb}, 0.75);
        content: "";
        height: 200%;
        left: 0;
        position: absolute;
        bottom: -16%;
        transform-origin: center;
        transform: skewX(-66deg) translate(34vw, -8%);
        width: 130vw;
        z-index: -1;
      }

      svg * {
        fill: ${colors.text.white.hex};
      }
    }

    :nth-child(even):not(:last-child) {
      padding-left: 50vw;
    }

    > header {
      margin-bottom: ${pxToEm(30)};
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

const ButtonGroup = styled.div`
  margin-top: ${pxToEm(30)};

  > button:not(:first-child) {
    margin-left: ${pxToEm(50)};
  }
`;

const IconContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  width: ${pxToEm(60)};
`;

const LandingPage = () => (
  <Landing>
    <section>
      <h1>Make the most out of your job</h1>
      <h2>Your personal career advisor</h2>
      <h3>Get paid what you're worth, increase your value, discover new jobs.</h3>

      <ButtonGroup>
        <Button variant="primary" type="button">
          Get Started
        </Button>
      </ButtonGroup>
    </section>

    <section>
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
            <CloudIcon />
          </IconContainer>
          <p>Data sourced from employees, companies and recruiters</p>
        </li>
      </IconBulletList>

      <ButtonGroup>
        <Button variant="secondary" type="button">
          Sign Up
        </Button>
      </ButtonGroup>
    </section>

    <section>
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
    </section>

    <section>
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
    </section>

    <section>
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
    </section>

    <section>
      <header>
        <h1>Understand Your Worth</h1>
      </header>

      <p>
        Research salaries by company, job title and location. Sign up with WorthAware to get a personalized review of your worth and get matched to
        higher paying jobs.
      </p>

      <form>
        <input type="text" />
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </form>
    </section>
  </Landing>
);

export default LandingPage;

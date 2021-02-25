import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button';

import { pxToEm } from '../../styles/utils/converters';

const Landing = styled.main`
  padding: 0 15vw;

  section {
    padding: ${pxToEm(50)} 0;
  }
`;

const LandingPage = () => (
  <Landing>
    <section>
      <h1>Make the most out of your job</h1>
      <h2>Your personal career advisor</h2>
      <h3>Get paid what you're worth, increase your value, discover new jobs.</h3>

      <Button variant="primary" type="button">
        Get Started
      </Button>
    </section>

    <section>
      <h1>Salaries</h1>

      <ul>
        <li>
          <p>Explore salaries across companies, jobs, and locations (U.S.)</p>
        </li>
        <li>
          <p>Access insightful market data on companies and jobs</p>
        </li>
        <li>
          <p>Data sourced from employees, companies and recruiters</p>
        </li>
      </ul>

      <Button variant="secondary" type="button">
        Sign Up
      </Button>
    </section>

    <section>
      <h1>Your Worth</h1>

      <ul>
        <li>
          <p>Get your personalized salary report card</p>
        </li>
        <li>
          <p>Compare your market value based on people like you</p>
        </li>
        <li>
          <p>Get help with negotiating a raise, offer, or find a job</p>
        </li>
      </ul>

      <Button variant="secondary" type="button">
        Sign Up
      </Button>
    </section>

    <section>
      <h1>JobSense</h1>

      <ul>
        <li>
          <p>Get matched to jobs that fit your skills</p>
        </li>
        <li>
          <p>See what you would earn for every job listing</p>
        </li>
        <li>
          <p>Just upload your resume, and we'll match jobs to you</p>
        </li>
      </ul>

      <Button variant="primary" type="button">
        Sign Up
      </Button>
    </section>

    <section>
      <h1>Raises and Offers</h1>

      <ul>
        <li>
          <p>Find out if you’re due for a raise or promotion</p>
        </li>
        <li>
          <p>Evaluate an offer (or compare multiple offers)</p>
        </li>
        <li>
          <p>Get help with negotiating more money</p>
        </li>
      </ul>

      <Button variant="secondary" type="button">
        Get a Raise
      </Button>

      <Button variant="secondary" type="button">
        Evaluate an Offer
      </Button>
    </section>

    <section>
      <h1>Understand Your Worth</h1>

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

import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { testId } from '../../../utils/enums/testEnums';
import SvgIcon from './SvgIcon';

const Bullet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" />
  </svg>
);

describe('SvgIcon Tests', () => {
  it('should render without errors with default props', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with children passed', () => {
    const { getByTestId } = render(
      <SvgIcon data-testid={testId}>
        <Bullet />
      </SvgIcon>
    );

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with fill prop set to string', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} fill="red" />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with fill prop set to hex', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} fill="#FF0000" />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with fill prop set to rgb', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} fill="rgb(255, 0, 0)" />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with size prop set as number', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} size={24} />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with size prop set as string', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} size="24" />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with title prop set', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} title="SVG Test" />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with viewBox prop set', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} viewBox="0 0 24 24" />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should render without errors with all props set no child', () => {
    const { getByTestId } = render(<SvgIcon data-testid={testId} fill="#FF0000" size="24" title="SVG Test" viewBox="0 0 24 24" />);

    expect(getByTestId(testId)).toBeDefined();
  });
  it('should render without errors with all props set and a child', () => {
    const { getByTestId } = render(
      <SvgIcon data-testid={testId} fill="#FF0000" size="24" title="SVG Test" viewBox="0 0 24 24">
        <Bullet />
      </SvgIcon>
    );

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should not have axe accessibility issues with default props', async () => {
    const { container } = render(<SvgIcon />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { testId } from '../../../utils/enums/testEnums';
import FontAwesomeIcon from './FontAwesomeIcon';

describe('FontAwesomeIcon Tests', () => {
  it('should render without errors with required props', () => {
    const { getByTestId } = render(<FontAwesomeIcon icon="spinner" data-testid={testId} />);

    expect(getByTestId(testId)).toBeDefined();
  });

  it('should not have axe accessibility issues with required props', async () => {
    const { container } = render(<FontAwesomeIcon icon="spinner" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

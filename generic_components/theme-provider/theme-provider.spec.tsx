import React from 'react';
import { render } from '@testing-library/react';
import { ApttaThemeProvider } from './theme-provider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<ApttaThemeProvider />);
  const rendered = getByText('Button');
  expect(rendered).toBeTruthy();
});

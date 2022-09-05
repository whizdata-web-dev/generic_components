import React from 'react';
import { render } from '@testing-library/react';
import {
  ContainedButton,
  ContainedButtonDisabled,
  OutlinedButton,
  OutlinedButtonDisabled,
  TextButton,
  TextButtonDisabled,
} from './button.composition';

it('should render actionable contained button', () => {
  const { container } = render(<ContainedButton />);
  const renderedContainedButton = container.querySelector('.ContainedButton');
  expect(renderedContainedButton).toBeTruthy();
  expect(renderedContainedButton).not.toHaveAttribute('disabled');
});

it('should render disabled contained button', () => {
  const { container } = render(<ContainedButtonDisabled />);
  const renderedContainedButtonDisabled = container.querySelector(
    '.ContainedButtonDisabled'
  );
  expect(renderedContainedButtonDisabled).toBeTruthy();
  expect(renderedContainedButtonDisabled).toHaveAttribute('disabled');
});

it('should render actionable outlined button', () => {
  const { container } = render(<OutlinedButton />);
  const renderedOutlinedButton = container.querySelector('.OutlinedButton');
  expect(renderedOutlinedButton).toBeTruthy();
  expect(renderedOutlinedButton).not.toHaveAttribute('disabled');
});

it('should render disabled outlined button', () => {
  const { container } = render(<OutlinedButtonDisabled />);
  const renderedOutlinedButtonDisabled = container.querySelector(
    '.OutlinedButtonDisabled'
  );
  expect(renderedOutlinedButtonDisabled).toBeTruthy();
  expect(renderedOutlinedButtonDisabled).toHaveAttribute('disabled');
});

it('should render actionable text button', () => {
  const { container } = render(<TextButton />);
  const renderedTextButton = container.querySelector('.TextButton');
  expect(renderedTextButton).toBeTruthy();
  expect(renderedTextButton).not.toHaveAttribute('disabled');
});

it('should render disabled text button', () => {
  const { container } = render(<TextButtonDisabled />);
  const renderedTextButtonDisabled = container.querySelector(
    '.TextButtonDisabled'
  );
  expect(renderedTextButtonDisabled).toBeTruthy();
  expect(renderedTextButtonDisabled).toHaveAttribute('disabled');
});

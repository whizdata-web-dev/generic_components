import React from 'react';
import { Button } from './button';
import { variants } from './constants';
import { ThemeProvider } from '@generic_components/whizdata.generic_components.theme-provider';

export const ContainedButton = () => {
  return (
    <ThemeProvider>
      <Button buttonClasses={'ContainedButton'} variant={variants.CONTAINED}>
        Button
      </Button>
    </ThemeProvider>
  );
};

export const ContainedButtonLoading = () => {
  return (
    <ThemeProvider>
      <Button
        buttonClasses={'ContainedButton'}
        variant={variants.CONTAINED}
        isLoading={true}
      >
        Button
      </Button>
    </ThemeProvider>
  );
};

export const ContainedButtonDisabled = () => {
  return (
    <ThemeProvider>
      <Button
        buttonClasses={'ContainedButtonDisabled'}
        variant={variants.CONTAINED}
        disabled={true}
      >
        Button
      </Button>
    </ThemeProvider>
  );
};

export const OutlinedButton = () => {
  return (
    <ThemeProvider>
      <Button buttonClasses={'OutlinedButton'} variant={variants.OUTLINED}>
        Button
      </Button>
    </ThemeProvider>
  );
};

export const OutlinedButtonLoading = () => {
  return (
    <ThemeProvider>
      <Button
        buttonClasses={'OutlinedButton'}
        variant={variants.OUTLINED}
        isLoading={true}
      >
        Button
      </Button>
    </ThemeProvider>
  );
};

export const OutlinedButtonDisabled = () => {
  return (
    <ThemeProvider>
      <Button
        buttonClasses={'OutlinedButtonDisabled'}
        variant={variants.OUTLINED}
        disabled={true}
      >
        Button
      </Button>
    </ThemeProvider>
  );
};

export const TextButton = () => {
  return (
    <ThemeProvider>
      <Button buttonClasses={'TextButton'} variant={variants.TEXT}>
        Button
      </Button>
    </ThemeProvider>
  );
};

export const TextButtonLoading = () => {
  return (
    <ThemeProvider>
      <Button
        buttonClasses={'TextButton'}
        variant={variants.TEXT}
        isLoading={true}
      >
        Button
      </Button>
    </ThemeProvider>
  );
};

export const TextButtonDisabled = () => {
  return (
    <ThemeProvider>
      <Button
        buttonClasses={'TextButtonDisabled'}
        variant={variants.TEXT}
        disabled={true}
      >
        Button
      </Button>
    </ThemeProvider>
  );
};

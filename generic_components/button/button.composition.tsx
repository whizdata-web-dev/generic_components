import React from 'react';
import { Button } from './button';
import { variants } from './constants';
import { ThemeProvider } from '@generic_components/whizdata.generic_components.theme-provider';

export const ContainedButton = () => {
  return (
    <ThemeProvider>
      <Button
        className={'ContainedButton'}
        variant={variants.CONTAINED}
        onClick={() => console.log('clicked on contained')}
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
        className={'ContainedButtonDisabled'}
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
      <Button
        className={'OutlinedButton'}
        variant={variants.OUTLINED}
        onClick={() => console.log('clicked on outlined')}
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
        className={'OutlinedButtonDisabled'}
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
      <Button
        className={'TextButton'}
        variant={variants.TEXT}
        onClick={() => console.log('clicked on text')}
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
        className={'TextButtonDisabled'}
        variant={variants.TEXT}
        disabled={true}
      >
        Button
      </Button>
    </ThemeProvider>
  );
};

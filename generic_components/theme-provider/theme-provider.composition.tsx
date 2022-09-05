import { Button } from '@mui/material';
import React from 'react';
import { ThemeProvider } from './theme-provider';

export const ApttaThemeProvider = () => {
  return (
    <ThemeProvider themeName="aptta">
      <Button variant="contained">Button</Button>
    </ThemeProvider>
  );
};

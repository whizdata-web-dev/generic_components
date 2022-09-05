import { createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';
import { getThemePalette } from './palette';

export const getTheme = (themeName) => {
  let palette = getThemePalette(themeName);
  return createTheme({
    palette,
  });
};

import { apttaPalette } from './aptta';
import { genericPalette } from './common';

export const getThemePalette = (themeName) => {
  switch (themeName) {
    case 'aptta':
      return apttaPalette;
    default:
      return genericPalette;
  }
};

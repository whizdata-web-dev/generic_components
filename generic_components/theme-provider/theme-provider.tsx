import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';

export type ThemeProviderProps = {
  /**
   * Node to be rendered in the special component.
   */
  children?: ReactNode;

  /**
   * Theme to be applied to nodes.
   */
  themeName?: string;
};

export function ThemeProvider({
  children,
  themeName = 'aptta',
}: ThemeProviderProps) {
  const theme = useMemo(() => getTheme(themeName), [themeName]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

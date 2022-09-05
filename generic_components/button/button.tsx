import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Button as MuiButton, CircularProgress, Icon } from '@mui/material';
import { textStyle, variants } from './constants';
import { useStyles } from './styles';

export type ButtonProps = {
  /**
   * Text to be displayed inside button.
   */
  children?: string;
  /**
   * Class to be added to button.
   */
  buttonClasses?: any;
  /**
   * Disable a button.
   */
  disabled?: boolean;
  /**
   * Insert icon at the end of button.
   */
  icon?: ReactNode;
  /**
   * Set if button is loading.
   */
  isLoading?: boolean;
  /**
   * Choose button variant.
   */
  variant?: variants;
  /**
   * Choose button text style.
   */
  textVariant?: textStyle;

  /**
   * Class to be added to CircularProgress.
   */
  circularProgressClasses?: any;

  /**
   * Attach onClick handler to the button.
   */
  onClick?: (e: any) => void;
};

export function Button({
  // Button props
  buttonClasses,
  children,
  disabled = false,
  icon,
  isLoading = false,
  textVariant = textStyle.UPPERCASE,
  variant = variants.CONTAINED,

  // CircularProgress props
  circularProgressClasses,

  // functions
  onClick,
}: ButtonProps) {
  const { classes } = useStyles();

  const getButtonContent = () => {
    return isLoading ? (
      <CircularProgress
        className={clsx(
          circularProgressClasses,
          classes['circularProgressRoot']
        )}
      />
    ) : (
      children
    );
  };

  const setDisabled = () => {
    return disabled || isLoading;
  };

  return (
    <MuiButton
      className={clsx(buttonClasses, classes.buttonRoot, classes[textVariant])}
      variant={variant}
      disabled={setDisabled()}
      endIcon={icon}
      onClick={onClick}
    >
      {getButtonContent()}
    </MuiButton>
  );
}

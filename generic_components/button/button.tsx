import React, { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import { variants } from './constants';
import { useStyles } from './styles';
import clsx from 'clsx';

export type ButtonProps = {
  /**
   * Text to be displayed inside button.
   */
  children?: string;
  /**
   * Class to be added to button.
   */
  className?: any;
  /**
   * Disable a button.
   */
  disabled?: boolean;
  /**
   * Insert icon at the end of button.
   */
  icon?: ReactNode;
  /**
   * Choose button variant.
   */
  variant?: variants;
  /**
   * a node to be rendered in the special component.
   */
  onClick?: (e: any) => void;
};

export function Button({
  children,
  className,
  disabled = false,
  icon,
  variant = variants.CONTAINED,
  onClick,
}: ButtonProps) {
  const { classes } = useStyles();

  return (
    <MuiButton
      className={clsx(className, classes.root)}
      variant={variant}
      disabled={disabled}
      endIcon={icon}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}

import { makeStyles } from 'tss-react/mui';
import { textStyle } from './constants';

export const useStyles: Function = makeStyles()((theme) => {
  return {
    buttonRoot: {
      width: '100%',
      minWidth: '200px !important',
      maxWidth: '480px',
      [theme.breakpoints.up('xl')]: {
        height: '56px',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        height: '48px',
      },
      [theme.breakpoints.down('md')]: {
        height: '40px',
      },
    },

    circularProgressRoot: {
      [theme.breakpoints.up('xl')]: {
        height: '32px !important',
        width: '32px !important',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        height: '24px !important',
        width: '24px !important',
      },
      [theme.breakpoints.down('md')]: {
        height: '16px !important',
        width: '16px !important',
      },
    },

    [textStyle.CAPITALIZE]: {
      textTransform: 'capitalize',
    },

    [textStyle.UPPERCASE]: {
      textTransform: 'uppercase',
    },

    [textStyle.LOWERCASE]: {
      textTransform: 'lowercase',
    },
  };
});

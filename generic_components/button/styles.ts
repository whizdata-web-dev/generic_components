import { makeStyles } from 'tss-react/mui';

export const useStyles: Function = makeStyles()((theme) => {
  return {
    root: {
      width: '100%',
      maxWidth: '480px',
      // [theme.breakpoints.up('md')]: {
      //   width: '480px',
      // },
      // [theme.breakpoints.down("md")]: {
      //   width: "480px"
      // },
      // '&.MuiButton-contained': {
      //   backgroundColor: '#09733E',
      // },
    },
  };
});

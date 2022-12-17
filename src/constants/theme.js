import { createTheme } from '@mui/material';

const { palette } = createTheme();
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 678,
      md: 736,
      lg: 768,
      xl: 992,
    },
    palette: {
      primary: {
        main: '#660099',
      },
    },
  },
});

import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509',
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
        blue: {
          100: '#B3CEFA',
          200: '#79A9F6',
          300: '#669DF4',
          400: '#5391F3',
          500: '#2D78F0',
          600: '#1062E5',
          700: '#0D51BF',
          800: '#05204A',
          900: '#02020A',
        },
        red: {
          100: '#F9DCE1',
          200: '#F3B9C3',
          300: '#F0A8B4',
          400: '#EA8596',
          500: '#E46278',
          600: '#DE3F5A',
          700: '#D12340',
          800: '#AE1E36',
          900: '#8B182C',
        },
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0', // manually changed
          500: '#77639b',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5',
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee',
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb',
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
        blue: {
          900: '#B3CEFA',
          800: '#79A9F6',
          700: '#669DF4',
          600: '#5391F3',
          500: '#2D78F0',
          400: '#1062E5',
          300: '#0D51BF',
          200: '#05204A',
          100: '#02020A',
        },
        red: {
          900: '#F9DCE1',
          800: '#F3B9C3',
          700: '#F0A8B4',
          600: '#EA8596',
          500: '#E46278',
          400: '#DE3F5A',
          300: '#D12340',
          200: '#AE1E36',
          100: '#8B182C',
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    },
    typography: {
      h1: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 700,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontFamily: "'Open Sans',sans-serif",
        fontWeight: 700,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
      h3: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
      h4: {
        fontFamily: "'Open Sans',sans-serif",
        fontWeight: 700,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
      },
      h5: {
        fontFamily: "'Open Sans',sans-serif",
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.43,
        letterSpacing: '0em',
      },
      h6: {
        fontFamily: "'Open Sans',sans-serif",
        fontWeight: 400,
        fontSize: '0.9rem',
        lineHeight: 1.43,
        letterSpacing: '0.0075em',
      },
      subtitle1: {
        fontFamily: "'Open Sans',sans-serif",
        fontWeight: 600,
        fontSize: '1.0rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
      subtitle2: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
      },
      body1: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      body2: {
        fontFamily: "'Open Sans',sans-serif",
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode, mode];
};

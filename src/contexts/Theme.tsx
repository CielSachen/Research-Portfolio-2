import {
  createTheme,
  type PaletteMode,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { createContext, type ReactNode, useMemo, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = createContext({ toggleColorMode: () => {} });

interface Props {
  children: ReactNode;
}

export function ThemeProvider(props: Props) {
  const [mode, setMode] = useState<PaletteMode>(useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light');
  const colorMode = useMemo(() => ({ toggleColorMode: () => {
    setMode((prevMode) => (prevMode === 'light'
      ? 'dark'
      : 'light'));
  } }), []);

  let theme;

  theme = useMemo(() => createTheme({ palette: {
    primary: mode === 'light'
      ? {
        main: green[800],
        light: green[500],
        dark: green[900],
      }
      : {
        main: green[400],
        light: green[300],
        dark: green[700],
      },
    mode,
  } }), [mode]);
  theme = responsiveFontSizes(theme);

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

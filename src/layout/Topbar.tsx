import { DarkMode, Language, LightMode, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../contexts';

interface Props {
  handleDrawerOpen: () => void;
}

export function Topbar(props: Props) {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Tooltip title="Toggle Navigation Drawer">
          <IconButton
            color="inherit"
            edge="start"
            onClick={props.handleDrawerOpen}
            size="large"
            sx={{ mr: 1 }}
          >
            <Menu />
          </IconButton>
        </Tooltip>
        <Tooltip title="Return to Homepage">
          <Button
            color="inherit"
            component={NavLink}
            reloadDocument
            to="/"
            variant="text"
          >
            <Typography
              fontWeight="bold"
              variant="h6"
            >S 2 0 1 8 4 0 2</Typography>
          </Button>
        </Tooltip>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title={`Toggle ${theme.palette.mode === 'dark'
          ? 'Light'
          : 'Dark'} Mode`}>
          <IconButton
            color="inherit"
            onClick={colorMode.toggleColorMode}
            size="large"
          >
            {theme.palette.mode === 'dark'
              ? <LightMode />
              : <DarkMode />}
          </IconButton>
        </Tooltip>
        <Tooltip title="View my Personal Website">
          <IconButton
            color="inherit"
            edge="end"
            href="https://cielsachen.github.io/Website/"
            rel="noreferrer"
            size="large"
            sx={{ ml: 1 }}
            target="_blank"
          >
            <Language />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

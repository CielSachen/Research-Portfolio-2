import { Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function MainLayout() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Topbar handleDrawerOpen={handleDrawerOpen} />
        <Box
          component="nav"
          sx={{ flexShrink: 0 }}
        >
          <Sidebar
            handleDrawerClose={handleDrawerClose}
            open={open}
          />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: '100vh',
            width: '100%',
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
      <ScrollRestoration />
    </>
  );
}

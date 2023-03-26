import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

function Layout() {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [isSidebaeOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebaeOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebaeOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;

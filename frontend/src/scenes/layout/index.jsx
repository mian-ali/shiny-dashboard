import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useGetUsersQuery } from 'state/api';

function Layout() {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [isSidebaeOpen, setIsSidebarOpen] = useState(true);

  const userId = useSelector((state) => state.global.userId);
  console.log(userId, 'userId');
  const { data } = useGetUsersQuery(userId);
  console.log('🚀 ~ file: index.jsx:15 ~ Layout ~ data:', data);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebaeOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebaeOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;

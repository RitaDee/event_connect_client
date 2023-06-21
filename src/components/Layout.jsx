/* eslint-disable import/no-extraneous-dependencies */
import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

const Layout = () => (
  <Grid templateColumns="repeat(4, 2fr)">
    <GridItem colSpan={1}>
      <Sidebar />
    </GridItem>
    <GridItem colSpan={3}>
      <Outlet />
    </GridItem>
  </Grid>
);
export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './SideBar';

const Layout = () => (
  <StyledDiv>
    <Sidebar />
    <Outlet />
  </StyledDiv>
);

const StyledDiv = styled(div)`
  display: flex;
  justify-content: space-between;
`;
export default Layout;

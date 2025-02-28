import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { Main } from "./SharedStyles";

const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
)

export default Layout;

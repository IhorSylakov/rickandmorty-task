import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import styles from "./layout.module.css";

const Layout = () => (
  <Fragment>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
  </Fragment>
)

export default Layout;

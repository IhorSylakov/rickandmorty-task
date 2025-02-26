import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import styles from "./layout.module.css";

const Layout = () => (
  <>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
  </>
)

export default Layout;

import React, { Fragment } from 'react';
import Header from '../Components/Header';
import styles from "./layout.module.css";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
  </Fragment>
)

export default Layout;

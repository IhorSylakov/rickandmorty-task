import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./index.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <NavLink exact to='/rickandmorty-task' activeClassName={styles.active} className={styles.link}>Home</NavLink>
        <NavLink to='/rickandmorty-task/about' activeClassName={styles.active} className={styles.link}>About</NavLink>
        <NavLink to='/rickandmorty-task/contacts' activeClassName={styles.active} className={styles.link}>Contacts</NavLink>
      </nav>
    </header>
  );
}

export default Header;

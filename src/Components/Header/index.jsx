import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./index.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <NavLink
          end
          to='/'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          About
        </NavLink>
        <NavLink
          to='/contacts'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Contacts
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

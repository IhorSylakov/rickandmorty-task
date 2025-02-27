import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./index.module.css";

const menu = [
  {
    path: '/',
    title: 'Home',
    isExact: true
  },
  {
    path: '/about',
    title: 'About',
    isExact: false
  },
  {
    path: '/contacts',
    title: 'Contacts',
    isExact: false
  }
]

function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        {menu && menu.map((item) => (
          <NavLink
            key={item.title}
            end={item.isExact}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;

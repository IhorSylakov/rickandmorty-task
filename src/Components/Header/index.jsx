import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  padding: var(--main-gap);
  align-items: center;
  justify-content: center;
  background-color: var(--header-bg-color);
`;

const StyledNav = styled.nav`
  display: flex;
`

const StyledNavLink = styled(NavLink)`
  padding: 15px 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: var(--theme-color);
    background-color: var(--header-active-bg);
  }
`;

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
    <StyledHeader>
      <StyledNav>
        {menu && menu.map((item) => (
          <StyledNavLink
            key={item.title}
            end={item.isExact}
            to={item.path}
          >
            {item.title}
          </StyledNavLink>
        ))}
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;

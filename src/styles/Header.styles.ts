import styled from 'styled-components';
export const HeaderNav = styled.nav`
  background-color: #c99999;
  color: #ffffff;
  padding: 1rem;
`;

export const HeaderNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const HeaderNavItem = styled.li`
  display: inline;
`;

export const HeaderNavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
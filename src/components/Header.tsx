import { Link } from 'react-router-dom';
import CartBadge from './CartBadge';
import { HeaderNav, HeaderNavList, HeaderNavItem, HeaderNavLink } from '../styles/Header.styles';

export default function Header() {
  return (
    <>
      <HeaderNav>
        <HeaderNavList>
          <HeaderNavItem>
            <HeaderNavLink as={Link} to="/">Home</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink as={Link} to="/store">Store</HeaderNavLink>
          </HeaderNavItem>
          <CartBadge />
        </HeaderNavList>
      </HeaderNav>
    </>
  );
}

import { Route, Routes, Link } from 'react-router-dom';
import CartBadge from './CartBadge';

export default function Header({cart}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        <CartBadge cart={cart}/>
        </ul>
      </nav>
    </>
  );
}

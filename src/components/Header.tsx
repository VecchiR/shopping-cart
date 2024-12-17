import { Link } from 'react-router-dom';
import CartBadge from './CartBadge';

export default function Header() {
  return (
    <header className='p-6'>
      <nav className='flex justify-between'>
        <ul className='flex gap-4'>
          <h1 className='font-bold' >Logo</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
          <CartBadge />
      </nav>
    </header>
  );
}

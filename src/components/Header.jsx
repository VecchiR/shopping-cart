import { Route, Routes, Link } from 'react-router-dom';

export default function Header() {
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
        </ul>
      </nav>
    </>
  );
}

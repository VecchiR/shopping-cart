import { Route, Routes, Link } from 'react-router-dom';
import '../styles/bundle.js';
import StorePage from './Pages/StorePage.jsx';
import HomePage from './Pages/HomePage.jsx';

export default function App() {
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </>
  );
}

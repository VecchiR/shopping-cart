import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/bundle.js';
import StorePage from './Pages/StorePage.jsx';
import HomePage from './Pages/HomePage.jsx';
import Header from './Header.jsx';

export default function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage products={products}/>} />
      </Routes>
    </>
  );
}

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/bundle';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';
import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';

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
      <Footer/>
    </>
  );

  // return (
  //   // <ProductCard title={'item1'} price={99.99} />
  // )

}

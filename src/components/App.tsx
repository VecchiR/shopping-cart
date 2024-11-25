import { useEffect, useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/bundle';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';
import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';
import ProductPage from './Pages/ProductPage';

export const ShopContext = createContext({
  products: [],
  cart: [],
  addProductToCart: () => {},
});

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  const addProductToCart = (productId) => {
    console.log('productId:', productId);
    const product = products.find((product) => product.id === parseInt(productId));
    setCart([...cart, product]);
  };

  return (
    <>
      <ShopContext.Provider value={{ cart, products, addProductToCart }}>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/store"
            element={<StorePage products={products} addProductToCart={addProductToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} addProductToCart={addProductToCart} />}
          />
        </Routes>
      </ShopContext.Provider>
      <Footer />
    </>
  );

  // return (
  //   // <ProductCard title={'item1'} price={99.99} />
  // )
}

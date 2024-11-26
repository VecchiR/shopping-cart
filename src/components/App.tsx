import { useEffect, useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/bundle';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';
import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';
import ProductPage from './Pages/ProductPage';
import { CartItem, Product, ShopContextType } from '../../types';

export const ShopContext = createContext<ShopContextType>({
  products: [],
  cart: [],
  addProductToCart: () => {},
});

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  const addProductToCart = (productId: number, quantity: number = 1): void => {
    //check if there's already a product with that id in the cart
    const cartItem = cart.find((item) => item.product.id === productId);

    if (cartItem) {
      // Update the quantity of the existing cart item
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      // Find the product in the products array
      const product = products.find((product) => product.id === productId);
      if (product) {
        // Add the product to the cart with the specified quantity
        setCart((prevCart) => [...prevCart, { product, quantity }]);
      } else {
        console.error(`Product with ID ${productId} not found`);
      }
    }
  };

  return (
    <>
      <ShopContext.Provider value={{ cart, products, addProductToCart }}>
        <Header/>
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

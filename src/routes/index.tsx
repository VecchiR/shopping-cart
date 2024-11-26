import { Route, Routes } from 'react-router-dom';
import StorePage from '../components/Pages/StorePage';
import HomePage from '../components/Pages/HomePage';
import ProductPage from '../components/Pages/ProductPage';
import CartPage from '../components/Pages/CartPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}
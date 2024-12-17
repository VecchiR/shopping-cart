import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ShopContext } from '../src/context/ShopContext';
import { Product } from '../types';
import ProductPage from '../src/components/Pages/ProductPage';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    category: 'Category 1',
    price: 10,
    image: 'http://example.com/product1.jpg',
    description: 'Description for product 1',
  },
  {
    id: 2,
    title: 'Product 2',
    category: 'Category 2',
    price: 20,
    image: 'http://example.com/product2.jpg',
    description: 'Description for product 2',
  },
];

describe('ProductPage', () => {
  describe('when product is not found', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/product/999']}>
          <ShopContext.Provider value={{ products: mockProducts }}>
            <Routes>
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </ShopContext.Provider>
        </MemoryRouter>
      );
    });

    it('should display "Oops! Item not found" message', () => {
      expect(screen.getByText(/Oops! Item not found/i)).toBeInTheDocument();
    });
  });

  describe('when product is found', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/product/1']}>
          <ShopContext.Provider value={{ products: mockProducts }}>
            <Routes>
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </ShopContext.Provider>
        </MemoryRouter>
      );
    });

    it('should display product details', () => {
      expect(screen.getByRole('heading', { name: /product 1/i })).toBeInTheDocument();
      expect(screen.getByText(/Description for product 1/i)).toBeInTheDocument();
      expect(screen.getByText(/\$10.00/i)).toBeInTheDocument();
    });

    it('should display the GoBackButton', () => {
      expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
    });

    it('should display the AddToCartButton', () => {
      expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });
  });
});

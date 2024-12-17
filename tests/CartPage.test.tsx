import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CartPage from '../src/components/Pages/CartPage';
import { ShopContext } from '../src/context/ShopContext';
import { CartItem } from '../types';

const mockCartItems: CartItem[] = [
  {
    product: {
      id: 1,
      title: 'Product 1',
      category: 'Category 1',
      price: 10,
      image: 'http://example.com/product1.jpg',
      description: 'Description for product 1',
    },
    quantity: 3,
    onRemove: vitest.fn(),
    onQuantityChange: vitest.fn(),
  },
  {
    product: {
      id: 2,
      title: 'Product 2',
      category: 'Category 2',
      price: 20,
      image: 'http://example.com/product2.jpg',
      description: 'Description for product 2',
    },
    quantity: 1,
    onRemove: vitest.fn(),
    onQuantityChange: vitest.fn(),
  },
];

describe('CartPage', () => {
  describe('when cart is empty', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <ShopContext.Provider value={{ cartItems: [] }}>
            <CartPage />
          </ShopContext.Provider>
        </MemoryRouter>
      );
    });

    it('should display cart page heading', () => {
      expect(screen.getByRole('heading', { name: /your cart/i })).toBeInTheDocument();
    });

    it('should display a back navigation button', () => {
      expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
    });

    it('should display empty cart message when cart is empty', () => {
      expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    });
  });

  describe('when cart has items', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <ShopContext.Provider value={{ cartItems: mockCartItems }}>
            <CartPage />
          </ShopContext.Provider>
        </MemoryRouter>
      );
    });

    it('should display cart items', () => {
      mockCartItems.forEach((item) => {
        expect(screen.getByText(item.product.title)).toBeInTheDocument();
        expect(screen.getByText(`$${item.product.price.toFixed(2)}`)).toBeInTheDocument();
        expect(
          screen.getByText(`Subtotal: $${(item.product.price * item.quantity).toFixed(2)}`)
        ).toBeInTheDocument();
      });
    });

    it('should display the checkout button', () => {
      expect(screen.getByRole('button', { name: /checkout/i })).toBeInTheDocument();
    });
  });
});

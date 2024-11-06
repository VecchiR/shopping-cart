import { render, screen } from '@testing-library/react';
import ProductCard from '../src/components/ProductCard';
import { it, expect, describe } from 'vitest'

describe('ProductCard', () => {
  it('should render product card with provided title, price and imageUrl', () => {
    const product = { title: 'test product', price: '99', imageUrl: 'https://test.com/123.jpg' };
    const card = render(
      <ProductCard title={product.title} price={product.price} imageUrl={product.imageUrl} />
    );
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByRole('img').src).toBe(product.imageUrl);
  });
});

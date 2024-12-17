import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../src/components/ProductCard';
import { it, expect, describe } from 'vitest';
import { Product } from '../types/index';

const product: Product = {
  id: 1,
  title: 'dummy',
  price: 2.99,
  image: 'http://www.example.com/123.png',
  description: 'A dummy product',
  category: 'dummy category',
};

describe('Testing ProductCard conditional rendering', () => {
  it('should NOT render if missing product object', () => {
    render(
      <MemoryRouter>
        <ProductCard />
      </MemoryRouter>
    );
    const title = screen.queryByText(/dummy/i);
    const price = screen.queryByText(/\$2.99/i);
    expect(title).not.toBeInTheDocument();
    expect(price).not.toBeInTheDocument();
  });

  it('should NOT render if missing title', () => {
    render(
      <MemoryRouter>
        <ProductCard product={{ ...product, title: '' }} />
      </MemoryRouter>
    );
    const title = screen.queryByText(/dummy/i);
    const price = screen.queryByText(/\$2.99/i);
    expect(title).not.toBeInTheDocument();
    expect(price).not.toBeInTheDocument();
  });

  it('should NOT render if missing price', () => {
    render(
      <MemoryRouter>
        <ProductCard product={{ ...product, price: undefined }} />
      </MemoryRouter>
    );
    const title = screen.queryByText(/dummy/i);
    const price = screen.queryByText(/\$2.99/i);
    expect(title).not.toBeInTheDocument();
    expect(price).not.toBeInTheDocument();
  });

  it('SHOULD render when receiving both title AND price', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );
    const title = screen.queryByText(/dummy/i);
    const price = screen.queryByText(/\$2.99/i);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});

describe('Testing ProductCard imageURL', () => {
  it('should use placeholder image if no image is specified', () => {
    render(
      <MemoryRouter>
        <ProductCard product={{ ...product, image: undefined }} />
      </MemoryRouter>
    );
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain('placeholder.png');
  });

  it('should use the specified image', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain(product.image);
  });
});

describe('Testing ProductCard link', () => {
  it('should link to the correct product page', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );
    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link.href).toContain(`/product/${product.id}`);
  });
});

describe('Testing AddToCartButton', () => {
  it('should render AddToCartButton', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });
});
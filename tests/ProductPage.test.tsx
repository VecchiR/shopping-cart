import { getByRole, queryByRole, render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import '../types/index';
import ProductPage from '../src/components/Pages/ProductPage';
import { MemoryRouter } from 'react-router-dom';


describe('Testing conditional rendering', () => {
  const item = {
    title: 'dummy',
    price: 100,
    imageUrl: 'http://www.example.com/123.png',
    description: 'This is the description of a dummy product to test the ProductPage component',
  };

  it('Display error message when no product object on component OR if missing title or price', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    );
    const error = screen.getByRole('paragraph');
    expect(error).toBeInTheDocument();
    const addToCartButton = screen.queryByRole('button');
    expect(addToCartButton).not.toBeInTheDocument();
  });

  it('should contain title, price, description and addToCart button', () => {
    render(
      <MemoryRouter>
        <ProductPage {...item} />
      </MemoryRouter>
    );

    const addToCartButton = screen.queryByRole('button');
    expect(addToCartButton).toBeInTheDocument();

    const title = screen.getByRole('heading', {name:'dummy'});
    const description = screen.getByText(/description/i);
    const price = screen.getByText(/100/);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});

describe('Testing imageURL', () => {

  const itemNoImage = {
    title: 'dummy',
    price: 100,
    description: 'This is a dummy product to test the ProductPage component',
  };

  it('should use placeholder image if no imageUrl is specified', () => {
    render(<ProductPage {...itemNoImage} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain('placeholder.png');
  });

  const item = {
    title: 'dummy',
    price: 100,
    imageUrl: 'http://www.example.com/123.png',
    description: 'This is the description of a dummy product to test the ProductPage component',
  };

  it('should use the specified imageUrl', () => {
    render(<ProductPage {...item} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain(item.imageUrl);
  });
});

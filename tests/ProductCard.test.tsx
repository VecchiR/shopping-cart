import { render, screen } from '@testing-library/react';
import ProductCard from '../src/components/ProductCard';
import { it, expect, describe } from 'vitest'
import '../types/index';
import { Product } from '../types/index';

const product: Product = {
  title: 'dummy',
  price: 2.99,
  imageUrl: 'http://www.example.com/123.png'
}; 


describe('Testing ProductCard conditional rendering', () => {

  it('should NOT render if missing title', () => {
    render(<ProductCard price={product.price}/>);
    const title = screen.queryByText(/dummy/i);
    const dollarSign = screen.queryByText(/\$/i);
    const price = screen.queryByText(/2.99/i);
    expect(title).not.toBeInTheDocument();
    expect(dollarSign).not.toBeInTheDocument();
    expect(price).not.toBeInTheDocument();
  });

  it('should NOT render if missing price', () => {
    render(<ProductCard title={product.title}/>);
    const title = screen.queryByText(/dummy/i);
    const dollarSign = screen.queryByText(/\$/i);
    const price = screen.queryByText(/2.99/i);
    expect(title).not.toBeInTheDocument();
    expect(dollarSign).not.toBeInTheDocument();
    expect(price).not.toBeInTheDocument();
  });
  

  it('SHOULD render when receiving both title AND price', () => {
    render(<ProductCard title={product.title} price={product.price}/>);
    const title = screen.queryByText(/dummy/i);
    const price = screen.queryByText(/2.99/i);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

});

describe('Testing ProductCard imageURL', () => {
  it('should use placeholder image if no imageUrl is specified', () => {
    render(<ProductCard title={product.title} price={product.price}/>);
    const testImage = document.querySelector("img") as HTMLImageElement;    
    expect(testImage.src).toContain('placeholder.png');
  });

  it('should use the specified imageUrl', () => {
    render(<ProductCard title={product.title} price={product.price} imageUrl={product.imageUrl}/>);
    const testImage = document.querySelector("img") as HTMLImageElement;    
    expect(testImage.src).toContain(product.imageUrl);
  });
});


// should have a button to add to cart

// maybe price can't have 9.9999 -> should round up or down
import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest'
import '../types/index';
import AddToCartButton from '../src/components/AddToCartButton';


describe('Testing ProductCard conditional rendering', () => {

    // should render "addToCart"


  it('should NOT render if missing title', () => {
    render(<AddToCartButton/>);
    const title = screen.queryByText(/dummy/i);
    expect(title).not.toBeInTheDocument();
  });

});

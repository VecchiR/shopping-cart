import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import ProductList from '../components/ProductList';

describe('ProductList', () => {
  it('renders headline', () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );
    screen.debug();

    // check if App components renders headline
  });
});

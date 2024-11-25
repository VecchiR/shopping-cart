import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import '../types/index';
import HomePage from '../src/components/Pages/HomePage';
import { MemoryRouter } from 'react-router-dom';

// should contain text content, image and goShop button

describe('Testing HomePage', () => {
  it('should contain some text and image', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const text = screen.getByRole('paragraph');
    const image = screen.queryByRole('img');
    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('should contain button to go to store', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

});

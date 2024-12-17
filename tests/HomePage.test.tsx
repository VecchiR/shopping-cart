import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import '../types/index';
import HomePage from '../src/components/Pages/HomePage';
import { MemoryRouter } from 'react-router-dom';

// should contain text content, image and goShop button

describe('HomePage', () => {
  beforeEach(() => {render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  )});

  it('should contain some text and image', () => {
    const text = screen.getByRole('paragraph');
    const image = screen.queryByRole('img');
    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('should contain button to go to store', () => {
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  it('should contain a heading with the store name', () => {
    const heading = screen.getByRole('heading', { name: /Name of the store/i });
    expect(heading).toBeInTheDocument();
  });
});

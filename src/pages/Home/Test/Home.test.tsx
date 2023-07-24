import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('App', () => {
  it('Renders email list', () => {
    // ARRANGE
    render(<Home />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Email List');
  });
});

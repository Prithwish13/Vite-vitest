import { describe, it } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';
import Home from '../index';

describe('Home', () => {
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
  it('input box should work properly', async () => {
    render(<Home />);
    const input = document.querySelector('input') as HTMLInputElement | null;
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');
    if (input) {
      // test the input text
      input.textContent = 'jane@doe.com';
      expect(input.textContent).toBe('jane@doe.com');

      // test the type prop
      expect(input.type).toBe('email');

      // test the name prop
      expect(input.name).toBe('email');

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: 'john@doe.com',
        },
      });
      expect(input.value).toBe('john@doe.com');

      // test the required prop with the jest-dom
      expect(input).toBeRequired();
    }

    // expect(inputBox.textContent).toBe('');
    // expect(counter.textContent).toBe('count is 1');
  });
  it('on click add button input box will be empty', async () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: 'Add Email' });
    expect(button.textContent).toBe('Add Email');
    const input = document.querySelector('input') as HTMLInputElement | null;
    if (input) {
      input.textContent = 'jane@doe.com';
      await userEvent.click(button);
      expect(input.value).toBe('');
    }
  });

  it('should render the email', async () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: 'Add Email' });
    const input = document.querySelector('input') as HTMLInputElement | null;
    if (input) {
      input.textContent = 'jane@doe.com';
      await userEvent.click(button);
      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');
      expect(items[0].textContent).toBe('dey');
    }
  });
});

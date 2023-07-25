import { describe, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ListView from '.';

describe('ListView', () => {
  it('should render the email', async () => {
    const emailList = [
      {
        id: '1',
        email: 'deyabir30@gmail.com',
      },
      {
        id: '2',
        email: 'prithwish.dey@gmail.com',
      },
    ];
    render(<ListView list={emailList} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items[0].textContent).toBe('deyabir30@gmail.com');
    expect(items[1].textContent).toBe('prithwish.dey@gmail.com');
  });
});

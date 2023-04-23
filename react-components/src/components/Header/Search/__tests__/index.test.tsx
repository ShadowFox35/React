import React from 'react';
import { render } from '@testing-library/react';
import Search from '../Search';

describe('Component', () => {
  it('renders the element with class "search"', () => {
    const { getByTestId } = render(<Search />);
    const element = getByTestId('search');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('search');
  });
});

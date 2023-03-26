import React from 'react';
import { render } from '@testing-library/react';
import Forms from '../Forms';

describe('TextComponent', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Forms />);
    expect(getByText('Add new item')).toBeInTheDocument();
  });
});

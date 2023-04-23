import React from 'react';
import { render } from '@testing-library/react';
import Forms from '../Forms';

describe('TextComponent', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Forms />);
    expect(getByText('Add new item')).toBeInTheDocument();
    expect(getByText('Product type:')).toBeInTheDocument();
    expect(getByText('Product Name:*')).toBeInTheDocument();
    expect(getByText('Delivery')).toBeInTheDocument();
    expect(getByText('Receipt date:*')).toBeInTheDocument();
  });
});

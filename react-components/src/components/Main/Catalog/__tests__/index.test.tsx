import React from 'react';
import { render } from '@testing-library/react';
import Catalog from '../Catalog';

describe('TextComponent', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Catalog />);
    expect(getByText('Catalog')).toBeInTheDocument();
  });
});

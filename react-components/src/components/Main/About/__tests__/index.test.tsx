import React from 'react';
import { render } from '@testing-library/react';
import About from '../About';

describe('TextComponent', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<About />);
    expect(getByText('About Us')).toBeInTheDocument();
  });
});

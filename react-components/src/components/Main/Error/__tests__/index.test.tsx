import React from 'react';
import { render } from '@testing-library/react';
import Error from '../Error';

describe('TextComponent', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Error />);
    expect(getByText('Error 404')).toBeInTheDocument();
  });
});

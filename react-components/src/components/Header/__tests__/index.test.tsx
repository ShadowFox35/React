import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from '../Header';

describe('ExampleComponent', () => {
  it('renders the component without errors', () => {
    const div = document.createElement('div');
    render(<Header />, div);
  });
});

import App from 'App';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('ExampleComponent', () => {
  it('renders the component without errors', () => {
    const div = document.createElement('div');
    render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      div
    );
  });
});

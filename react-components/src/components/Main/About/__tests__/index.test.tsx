import { render } from '@testing-library/react';
import * as React from 'react';
import { testAppWrapper } from '../../../../constants/testsConst';
import About from '../About';

describe('<testError />', () => {
  it('should render and match the snapshot', () => {
    const componentRender = render(testAppWrapper(<About />));
    expect(componentRender).toMatchSnapshot();
  });
});

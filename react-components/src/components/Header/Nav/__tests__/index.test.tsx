import { render } from '@testing-library/react';
import * as React from 'react';
import { testAppWrapper } from '../../../../constants/testsConst';
import Navigation from '../Navigation';

describe('<testNav />', () => {
  it('should render and match the snapshot', () => {
    const componentRender = render(testAppWrapper(<Navigation />));
    expect(componentRender).toMatchSnapshot();
  });
});

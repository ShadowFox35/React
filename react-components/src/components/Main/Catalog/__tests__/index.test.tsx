import { render } from '@testing-library/react';
import * as React from 'react';
import { testAppWrapper } from '../../../../constants/testsConst';
import Catalog from '../Catalog';

describe('<testError />', () => {
  it('should render and match the snapshot', () => {
    const componentRender = render(testAppWrapper(<Catalog />));
    expect(componentRender).toMatchSnapshot();
  });
});

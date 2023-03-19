import { render } from '@testing-library/react';
import * as React from 'react';
import { testAppWrapper } from '../../../../constants/testsConst';
import Error from '../Error';

describe('<testError />', () => {
  it('should render and match the snapshot', () => {
    const componentRender = render(testAppWrapper(<Error />));
    expect(componentRender).toMatchSnapshot();
  });
});

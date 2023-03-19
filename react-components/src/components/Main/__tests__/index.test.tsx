import { render } from '@testing-library/react';
import { testAppWrapper } from 'constants/testsConst';
import * as React from 'react';

import Main from '../Main';

describe('<testMain />', () => {
  it('should render and match the snapshot', () => {
    const componentRender = render(testAppWrapper(<Main />));
    expect(componentRender).toMatchSnapshot();
  });
});

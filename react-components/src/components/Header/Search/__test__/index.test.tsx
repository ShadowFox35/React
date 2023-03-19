import { render } from '@testing-library/react';
import * as React from 'react';
import { testAppWrapper } from '../../../../constants/testsConst';
import Search from '../Search';

describe('<testSearch />', () => {
  it('should render and match the snapshot', () => {
    const componentRender = render(testAppWrapper(<Search />));
    expect(componentRender).toMatchSnapshot();
  });
});

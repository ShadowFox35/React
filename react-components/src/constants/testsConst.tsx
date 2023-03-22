import React from 'react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const testAppWrapper = (children: ReactNode): JSX.Element => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

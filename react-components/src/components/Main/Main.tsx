import React from 'react';
import { Link } from 'react-router-dom';
import Catalog from './Catalog/Catalog';

import './Main.scss';

const Main: React.FC = () => {
  document.title = 'main';
  return (
    <div className="container">
      <Catalog />
    </div>
  );
};

export default Main;

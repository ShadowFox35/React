import Search from 'components/Header/Search/Search';
import React from 'react';
import Catalog from './Catalog/Catalog';

import './Main.scss';

const Main: React.FC = () => {
  document.title = 'main';
  return (
    <div className="main container">
      <Search />
      <Catalog />
    </div>
  );
};

export default Main;

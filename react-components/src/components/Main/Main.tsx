import Search from 'components/Header/Search/Search';
import React, { useEffect } from 'react';
import Catalog from './Catalog/Catalog';

import './Main.scss';

const Main: React.FC = () => {
  useEffect(() => {
    document.title = 'main';
  }, []);
  return (
    <div className="main container">
      <Search />
      <Catalog />
    </div>
  );
};

export default Main;

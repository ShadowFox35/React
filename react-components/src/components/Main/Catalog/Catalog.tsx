import React from 'react';
import { Link } from 'react-router-dom';

import './Catalog.scss';

const Catalog: React.FC = () => {
  document.title = 'Главная';
  return (
    <div className="header">
      <button>Catalog</button>
    </div>
  );
};

export default Catalog;

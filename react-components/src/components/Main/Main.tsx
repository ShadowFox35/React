import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main: React.FC = () => {
  document.title = 'Главная';
  return (
    <div className="header">
      <button>Main</button>
    </div>
  );
};

export default Main;

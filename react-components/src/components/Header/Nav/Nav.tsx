import { headerNav } from 'constants/headerNav';
import React from 'react';
import { Link } from 'react-router-dom';
import { navElemType } from 'types/objects';

import './Nav.scss';

const Menu: React.FC = () => {
  document.title = 'Главная';
  return (
    <nav className="navigation">
      {headerNav.map((elem: navElemType, index: number) => (
        <div className="navigation_item" key={index}>
          <Link className="navigation_item_link" to={elem.link}>
            {elem.text}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Menu;

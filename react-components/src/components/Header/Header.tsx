import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Search from './Search/Search';

const Header: React.FC = () => {
  return (
    <header className="header">
      <section className="header_options">
        <h1 className="title">WeatherForecast</h1>
        <Search />
      </section>
    </header>
  );
};

export default Header;

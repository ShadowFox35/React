import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Search from './Search/Search';

import logo from '../../assets/logo.png';
import basket from '../../assets/icons/basket_icon.svg';
import Nav from './Nav/Nav';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Nav />
      <figure className="header_logo">
        <Link to="/">
          <img className="header_logo_img" src={logo} alt="backyard logo" />
        </Link>
      </figure>
      <Search />
      <section className="header_options">
        <img src={basket} alt="hobby art logo" className="logo-image" />
      </section>
    </header>
  );
};

export default Header;

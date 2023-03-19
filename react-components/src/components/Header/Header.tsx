import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import logo from '../../assets/main_logo.png';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import clock from '../../assets/clock.svg';

import basket from '../../assets/icons/basket_icon.svg';
import faves from '../../assets/icons/faves_icon.svg';

import Navigation from './Nav/Nav';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header_info">
        <div className="header_info_wrapper container ">
          <div className="info-item">
            <a className="info-item_text" target="blank" href="tel:+6 345 256 78 35">
              <img src={phone} alt="hobby art logo" className="icon" />
            </a>
            <a className="info-item_text" target="blank" href="tel:+6 345 256 78 35">
              +6 345 256 78 35
            </a>
          </div>

          <div className="info-item">
            <a
              className="info-item_text"
              target="blank"
              href="https://www.google.com/maps/place/Vespa+Photo+Design/@51.5073338,-0.1283292,17.77z/data=!4m15!1m8!3m7!1s0x47d8a00baf21de75:0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!3b1!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw!3m5!1s0x487605331bc8b299:0xe29782c675020780!8m2!3d51.507849!4d-0.1300444!16s%2Fg%2F11tg57qylz?hl=EN"
            >
              <img src={location} alt="hobby art logo" className="icon" />
            </a>
            <a
              className="info-item_text"
              target="blank"
              href="https://www.google.com/maps/place/Vespa+Photo+Design/@51.5073338,-0.1283292,17.77z/data=!4m15!1m8!3m7!1s0x47d8a00baf21de75:0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!3b1!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw!3m5!1s0x487605331bc8b299:0xe29782c675020780!8m2!3d51.507849!4d-0.1300444!16s%2Fg%2F11tg57qylz?hl=EN"
            >
              1 Cockspur St, London SW1Y 5DL, United Kingdom
            </a>
          </div>

          <div className="info-item">
            <img src={clock} alt="hobby art logo" className="icon" />
            Mon-Sat from 10:00 to 19:00
          </div>
        </div>
      </div>
      <div className="menu container">
        <Navigation />
        <Link to="/">
          <img src={logo} alt="hobby art logo" className="logo" />
        </Link>
        <div className="options">
          <img src={basket} alt="hobby art logo" className="icon" />
          <img src={faves} alt="hobby art logo" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import search from '../../../assets/icons/search.svg';

import './Search.scss';

const Search: React.FC = () => {
  return (
    <section className="search">
      <div className="wrapper">
        <input
          className="search_input"
          placeholder="Search for location"
          autoComplete="off"
          autoFocus
          name="search"
          value={0}
          tabIndex={0}
          // onKeyDown={handleAddCity}
          // onChange={readInput}
        />
        <div className="search_icon">
          <img
            src={search}
            alt="search icon"
            className="icon"
            // onClick={() => {
            //   getForecast(inputCity);
            // }}
          />
        </div>
      </div>
    </section>
  );
};

export default Search;

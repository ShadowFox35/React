import React, { useState } from 'react';

import search from '../../../assets/icons/search.svg';

import './Search.scss';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(getLocalInputValue());

  function getLocalInputValue(): string {
    const localInputValue = localStorage.getItem('input');
    return localInputValue !== null ? localInputValue : 'enter text';
  }

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    localStorage.setItem('input', event.target.value);
  };
  return (
    <section className="search" data-testid="search">
      <div className="wrapper">
        <input
          className="search_input"
          placeholder="Search ..."
          autoComplete="off"
          autoFocus
          name="search"
          value={inputValue}
          tabIndex={0}
          onChange={changeInput}
        />
        <div className="search_icon">
          <img src={search} alt="search icon" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Search;

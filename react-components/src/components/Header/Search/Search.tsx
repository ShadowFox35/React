import React from 'react';

import search from '../../../assets/icons/search.svg';

import './Search.scss';

interface IState {
  inputValue: string;
}
interface IProps {
  input?: string;
}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      inputValue:
        localStorage.getItem('input') !== null ? localStorage.getItem('input')! : 'enter text',
    };
  }

  changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  componentWillUnmount() {
    localStorage.setItem('input', this.state.inputValue);
  }

  render() {
    return (
      <section className="search">
        <div className="wrapper">
          <input
            className="search_input"
            placeholder="Search ..."
            autoComplete="off"
            autoFocus
            name="search"
            value={this.state.inputValue}
            tabIndex={0}
            onChange={this.changeInput}
          />
          <div className="search_icon">
            <img src={search} alt="search icon" className="icon" />
          </div>
        </div>
      </section>
    );
  }
}

export default Search;

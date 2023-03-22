import { catalogList } from 'constants/catalogList';
import React from 'react';

import { catalogElemType } from 'types/objects';

import basket from '../../../assets/icons/basket_icon.svg';

import './Catalog.scss';

const Catalog: React.FC = () => {
  return (
    <div className="catalog">
      {catalogList.map((good: catalogElemType, index: number) => (
        <div className="good" key={index}>
          <img
            className="good_img"
            src={`${process.env.PUBLIC_URL}/${good.url}`}
            alt={`${good.name}`}
          />
          <div>
            {' '}
            <strong>{good.category}</strong>
          </div>
          <strong>{good.name}</strong>
          <div>{good.structure}</div>
          <div> weight: {good.weight}</div>
          <div>thread length: {good.length}</div>
          <div> price: {good.price} $.</div>
          <button type="button" className="good_btn-inactiv">
            <img className="icon" src={basket} alt="" />
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Catalog;

import React from 'react';

import './styles.css';

const Filter = () => {
  return (
    <>
      <div className="filter-container base-card">
        <select className="filter-select-store">
          <option value="">Selecione a empresa</option>
          <option>Araguari</option>
        </select>
      </div>
    </>
  );
};

export default Filter;

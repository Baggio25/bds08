import React, { useMemo, useState } from 'react';
import './App.css';
import Filter, { StoreFilterData } from './components/filter';
import Header from './components/header';
import SaleByGender from './components/sales-by-gender';
import { buildFilterParams } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<StoreFilterData>();

  const onFilterChange = (filter: StoreFilterData) => {
    setFilterData(filter);
    console.log(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={onFilterChange} />
        <SaleByGender />
      </div>
    </>
  );
}

export default App;

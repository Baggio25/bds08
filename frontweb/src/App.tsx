import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter, { StoreFilterData } from './components/filter';
import Header from './components/header';
import SaleByGender from './components/sales-by-gender';
import { PieChartConfig, SalesByGender } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByGenderChart } from './helpers';

function App() {
  const [filterData, setFilterData] = useState<StoreFilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  const onFilterChange = (filter: StoreFilterData) => {
    setFilterData(filter);
    console.log(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={onFilterChange} />
        <SaleByGender
          name=""
          labels={salesByGender?.labels}
          series={salesByGender?.series}
          total={0}
        />
      </div>
    </>
  );
}

export default App;

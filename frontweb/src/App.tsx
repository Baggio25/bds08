import { useEffect, useMemo, useState } from "react";

import { buildSalesByGenre } from "./helpers";
import { sumSalesByDate } from "./utils/formatters";
import { buildFilterParams, makeRequest } from "./utils/requests";
import { FilterData, PieChartConfig, SalesByGenre } from "./utils/types";

import Filter from "./components/filter";
import Header from "./components/header";
import Summary from "./components/summary";

import "./App.css";

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGenre, setSalesByGenre] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);


  useEffect(() => {
    makeRequest
      .get<SalesByGenre[]>('/sales/by-gender', { params })
      .then((response) => {
        console.log(response.data);

        const newSalesByGenre = buildSalesByGenre(response.data);
        setSalesByGenre(newSalesByGenre);
        console.log("Vendas por genero --> ", newSalesByGenre);

        const newTotalSum = sumSalesByDate(response.data);
        setTotalSum(newTotalSum);
        console.log("Total de vendas --> ", newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales by genre');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <Summary totalSum={totalSum} name=""
          labels={salesByGenre?.labels}
          series={salesByGenre?.series} />
      </div>
    </>
  );
}

export default App;

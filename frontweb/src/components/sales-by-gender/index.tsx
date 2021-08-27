import React from 'react';
import { Gender } from '../../types';
import SalesByGenderPieChart from '../sales-by-gender-pie-chart';

import './styles.css';

type Props = {
  labels?: Gender[];
  name: string;
  series?: number[];
  total: number;
};

const SaleByGender = ({ labels, name, series, total }: Props) => {
  return (
    <>
      <div className="sales-by-gender-container base-card">
        <div className="sales-by-gender-text">
          <h1 className="sales-by-gender-total-sales-value">{total}</h1>
          <span className="sales-by-gender-total-sales-text">Total de vendas</span>
        </div>
        <div className="sales-by-gender-chart">
          <SalesByGenderPieChart name={name} labels={labels} series={series} />
        </div>
      </div>
    </>
  );
};

export default SaleByGender;

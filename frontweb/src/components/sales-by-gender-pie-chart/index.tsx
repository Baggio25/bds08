import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

const SalesByGenderPieChart = ({ labels, name, series }: Props) => {
  return (
    <div>
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="250"
        height="250"
        series={series}
      />
    </div>
  );
};

export default SalesByGenderPieChart;

import ReactApexChart from 'react-apexcharts';
import { formatValue } from "../../utils/formatters";
import { buildPieChartConfig } from './helpers';
import "./styles.css";

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  totalSum: number;
}

const Summary = ({ labels = [], name, series = [], totalSum }: Props) => {

  return (
    <>
      <div className="summary-card-container base-card">
        <div className='sumary-card-total-sum'>
          <h1 className='sumary-card-total-sum-value'>{formatValue(totalSum)}</h1>
          <p className='sumary-card-total-title'>Total de vendas</p>
        </div>
        <div className='sumary-card-chart'>
          <ReactApexChart
            options={buildPieChartConfig(labels, name)}
            type="donut"
            width="400"
            height="400"
            series={series}
          />
        </div>
      </div>
    </>
  );
}

export default Summary;
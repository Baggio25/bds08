import React from 'react';
import SalesByGenderPieChart from '../sales-by-gender-pie-chart';

import './styles.css';

const SaleByGender = () => {
  return (
    <>
      <div className="sales-by-gender-container base-card">
        <div className="sales-by-gender-text">
          <h1 className="sales-by-gender-total-sales-value">R$ 746.484,00</h1>
          <span className="sales-by-gender-total-sales-text">Total de vendas</span>
        </div>
        <div className="sales-by-gender-chart">
          <SalesByGenderPieChart
            name=""
            labels={['Feminino', 'Masculino', 'Outros']}
            series={[40, 30, 30]}
          />
        </div>
      </div>
    </>
  );
};

export default SaleByGender;

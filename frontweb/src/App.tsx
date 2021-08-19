import React from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SaleByGender from './components/sales-by-gender';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SaleByGender />
      </div>
    </>
  );
}

export default App;

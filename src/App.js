import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('AAPL');

  useEffect(() => {
    const getStocks = async () => {
      const res = await fetch(`https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=`)
    }
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;

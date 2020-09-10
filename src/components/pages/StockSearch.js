import React, { useEffect, useState } from 'react';
import EtfTable from './EtfTable';
import './StockSearch.css';

const Search = () => {
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Technology');

    useEffect(() => {
        const getStocks = async () => {
            const res = await fetch(`https://nottingham-1848-slayer-robin.azurewebsites.net/api/screen/${query}`)
            const data = await res.json();
            setStocks(data);
        }
        getStocks();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);

    }

    return (
        <div className="stock-search">
            <section id="search">
                <form onSubmit={getSearch} className="search-form">
                    <label htmlFor="sector">Sector:</label>
                    <select className="search-bar" value={search} name="search" onChange={updateSearch}>
                        <option value="technology">Technology</option>
                        <option value="industrials">Industrials</option>
                        <option value="energy">Energy</option>
                        <option value="services">Services</option>
                    </select>
                    <button className="search-button" type="submit">Search</button>
                </form>
            </section>
            <div className="stock-cards">
                {stocks.map(stock => (
                    <EtfTable
                        key={stock.symbol}
                        symbol={stock.symbol}
                        name={stock.name}
                        price={stock.price}
                        change={stock.change}
                        volume={stock.volume}
                        companyName={stock.companyName}
                    />
                ))}
            </div>

        </div>
    );
}

export default Search;
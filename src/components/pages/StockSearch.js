import React, { useEffect, useState } from 'react';
import Stock from '../Stock';

const Search = () => {
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Technology');

    useEffect(() => {
        const getStocks = async () => {
            const res = await fetch(`https://nottingham-1848-slayer-robin.azurewebsites.net/api/screen/${query}`)
            const data = await res.json();
            setStocks(data);
            console.log(data);
        }
        getStocks();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        // setSearch('');

    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <label htmlFor="sector">Choose Sector:</label>
                <select className="search-bar" value={search} name="search" onChange={updateSearch}>
                    <option value="technology">Technology</option>
                    <option value="industrials">Industrials</option>
                    <option value="energy">Energy</option>
                    <option value="services">Services</option>
                </select>
                {/* <input className="search-bar" type="text" value={search} onChange={updateSearch} /> */}
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="stocks">
                {stocks.map(stock => (
                    <Stock
                        key={stock.symbol}
                        symbol={stock.symbol}
                        companyName={stock.companyName}
                        marketCap={stock.marketCap}
                        price={stock.price}
                        lastAnnualDividend={stock.lastAnnualDividend}
                    />
                ))}
            </div>
        </div>
    );
}

export default Search;
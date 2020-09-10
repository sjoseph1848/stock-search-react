import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EtfTable from './EtfTable';
import './Etf.css'
const Etf = () => {
    const [etfs, setEtfs] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://nottingham-1848-slayer-robin.azurewebsites.net/api/etf/all')
            .then(res => {
                setEtfs(res.data)
            }).catch(error => console.log(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filterETFs = etfs.filter(et =>
        et.symbol.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="etf">
            <section className="etf-head">
                <div className="etf-search">
                    <h1 className="etf-text">Find an ETF</h1>
                    <form>
                        <input type="text" placeholder="Query" className="etf-input" onChange={handleChange} />
                    </form>
                </div>
            </section>

            <div className="etf-cards">
                {filterETFs.map((et, i) => {
                    return (
                        <EtfTable
                            key={i}
                            symbol={et.symbol}
                            name={et.name}
                            price={et.price}
                            change={et.change}
                            volume={et.volume}
                        />
                    )
                })}
            </div>
        </div>


    )
}

export default Etf;
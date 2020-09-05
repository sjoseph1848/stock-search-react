import React from 'react';
import style from './stock.module.css';

const Stock = ({ symbol, companyName, marketCap, price, lastAnnualDividend }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    return (
        <div className={style.stock}>
            <h1>{symbol}</h1>
            <p>{companyName}</p>
            <p>Market Cap:{formatter.format(parseInt(marketCap))}</p>
            <p>Price: {formatter.format(parseInt(price))}</p>
            <p>Last Annual Dividend: {formatter.format(parseInt(lastAnnualDividend))}</p>
        </div>
    )
}

export default Stock;
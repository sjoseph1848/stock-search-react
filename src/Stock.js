import React, { Component } from 'react';
import style from './stock.module.css';

const Stock = ({ symbol, companyName, marketCap }) => {
    return (
        <div className={style.stock}>
            <h1>{symbol}</h1>
            <p>{companyName}</p>
            <p>{marketCap}</p>
        </div>
    )
}

export default Stock;
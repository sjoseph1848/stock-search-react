import React from 'react';
import './EtfTable.css'
// import { Link } from 'react-router-dom';

const EtfTable = ({ name, symbol, price, change, volume, companyName }) => {
    let percentageChange;
    if (change !== undefined) {
        if (change < 0) {
            percentageChange = <li className="etf-percent red">Change: {change}%</li>
        } else {
            percentageChange = <li className="etf-percent green">Change {change}%</li>
        }
    } else {
        percentageChange = '';
    }

    return (
        <div className="etf-card">
            {/* <Link to={`/search/${symbol}`}> */}
            <ul>
                {name !== undefined ? (
                    <li>{name !== null ? name.substring(0, 20) : null}</li>
                ) :
                    (
                        <li>{companyName}</li>
                    )
                }

                <li>{symbol}</li>
                <li>Price: ${price}</li>
                <li>Volume: {volume}</li>
                {percentageChange}
            </ul>

        </div>
    )
}

export default EtfTable;
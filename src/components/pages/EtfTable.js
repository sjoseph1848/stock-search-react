import React from 'react';
import './EtfTable.css'

const EtfTable = ({ name, symbol, price, change, volume }) => {
    return (
        <div className="etf-container">
            <div className="etf-row">
                <div className="etf">
                    <p>{name.substring(0, 20)}</p>
                    <p className="etf-symbol">{symbol}</p>
                </div>
                <div className="etf-data">
                    <p className="etf-price">${price}</p>
                    <p className="etf-volume">{volume}</p>
                    {change < 0 ? (
                        <p className="etf-percent red">{change}%</p>)
                        : (
                            <p className="coin-percent green">{change}%</p>
                        )}
                </div>
            </div>
        </div>
    )
}

export default EtfTable;
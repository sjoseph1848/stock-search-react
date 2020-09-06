import React from 'react'
import analysis from '../../../src/assets/analysis.svg'

const Analysis = () => {
    return (
        <section id="analysis">
            <div className="analysis-text">
                <p>Stock filter <br />& <br />Analysis</p>
            </div>
            <div className="analysis-img">
                <img src={analysis} alt="hero" />
            </div>
        </section>
    )
}

export default Analysis;
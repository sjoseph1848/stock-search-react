import React from 'react';
import './NewsCard.css'
const NewsCard = ({ card: { title, urlToImage, url } }) => {

    return (

        <div className="property-card">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="property-image">
                    <img src={urlToImage} alt="News Article" />
                </div></a>
            <div className="property-description">
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default NewsCard;
import React from 'react';
import './NewsCard.css'
const NewsCard = ({ card: { title, urlToImage, url } }) => {

    return (
        // <div>
        //     <p>{title}</p>
        //     <p>{urlToImage}</p>
        //     <a href={url} style={{ color: 'black' }} rel="noopener noreferrer" target="_blank">Read More</a>
        // </div>

        <div className="center">
            <div className="property-card">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="property-image">
                        <img src={urlToImage} alt="News Article API Image" />
                    </div></a>
                <div className="property-description">
                    <h5>{title}</h5>
                </div>
            </div>
        </div>

    )
}

export default NewsCard;
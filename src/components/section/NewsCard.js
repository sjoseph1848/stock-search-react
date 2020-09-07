import React from 'react';

const NewsCard = ({ card: { title, urlToImage, url } }) => {

    return (
        <div>
            <p>{title}</p>
            <p>{urlToImage}</p>
            <a href={url} style={{ color: 'black' }} target="_blank">Read More</a>
        </div>
    )
}

export default NewsCard;
import React from 'react';
import './NewsListItem.scss'

const NewsListItem = ({ article }) => {
    const { title, desctiption, url, urlToImage } = article
    return (
        <div className="newsListItem">
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{desctiption}</p>
            </div>
        </div>
    );
};

export default React.memo(NewsListItem);
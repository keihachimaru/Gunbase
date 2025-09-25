import React from 'react';
import '../../styles/components/news.css';
import NewsProps from '../../types/types';

const News: React.FC<NewsProps> = ({ news }) => {
return (
    <div id="news">
        <h1>News</h1>
        <div className="newsContainer">
        {
            news.map( (item) => (
                <div key={item.id} className="newsItem">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            ))
        }
        </div>
    </div>
  );
};

export default News;

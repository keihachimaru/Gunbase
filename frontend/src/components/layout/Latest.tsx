import React from 'react';
import '../../styles/components/latest.css';
import LatestProps from '../../types/types';

const Latest: React.FC<LatestProps> = ({ latest }) => {
return (
    <div id="latest">
        <h1>Latest</h1>
        <div className="latestContainer">
        {
            latest.map( (item) => (
                <div key={item.id} className="latestItem">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            ))
        }
        </div>
    </div>
  );
};

export default Latest;

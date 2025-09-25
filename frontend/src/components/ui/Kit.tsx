import React from 'react';
import { useState } from 'react';
import '../../styles/components/kit.css';
import CarouselProps from '../../types/types';

const Kit: React.FC<KitProps> = ({ info }) => {
    const boxArt = info.galleries.find(o => o.caption==="Official box art").url;
    const anyImage = info.galleries[0].url
    return (
      <div className="kit" id={'kit-'+info.id}>
        <p className="kit-name">{info.name}</p>
        <div className="kit-card">
            <div className="back-face">
                <p>Grade : {info.grade}</p>
                <p>Series: {info.series}</p>
                <p>Build time: {info.buildTime}</p>
                <p>Difficulty: {info.difficulty}</p>
            </div>
            <img className="box-art" src={boxArt}/>
        </div>
      </div>
    );
};

export default Kit;

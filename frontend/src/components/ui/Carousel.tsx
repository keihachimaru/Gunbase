import React from 'react';
import { useState } from 'react';
import '../../styles/components/carousel.css';
import CarouselProps from '../../types/types';

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [idx, setIdx] = useState<number>(0);
     
    const itemPrev = items[idx];
    const item = items[(idx+1)%items.length];
    const itemNext = items[(idx+2)%items.length];

    function handleClick(n : number) {
        setIdx((idx+n+items.length)%items.length);
    }
    
    return (
      <div className="carousel">
          <button className="slide-btn next" onClick={() => { handleClick(1) }}>
          </button>

          <div key={itemPrev.id} className="carousel-item">
              <img src={itemPrev.image} alt={itemPrev.title} />
          </div>
          <div key={item.id} className="carousel-item">
              <img src={item.image} alt={item.title} />
          </div>
          <div key={itemNext.id} className="carousel-item">
              <img src={itemNext.image} alt={itemNext.title} />
          </div>

          <button className="slide-btn prev" onClick={() => { handleClick(-1) }}>
          </button>
      </div>
    );
};

export default Carousel;

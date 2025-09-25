import React from 'react';
import { useState } from 'react';
import '../../styles/components/searchbox.css';
import CarouselProps from '../../types/types';

const SearchBox: React.FC<KitProps> = () => {
    return (
      <div id="searchbox">
        <div className="filters">
            <button>
                Difficulty
            </button>
            <button>
                Price
            </button>
            <button>
                Year 
            </button>
            <button>
                Grade
            </button>
            <button>
                Series 
            </button>
        </div>
        <div className="input">
            <input placeholder="Name ..."/>
        </div>
      </div>
    );
};

export default SearchBox;

import React from 'react';
import '../../styles/components/hero.css';
import CarouselProps from '../../types/types';
import Carousel from '../ui/Carousel.tsx';
import heroImage from '../../assets/heroImage.jpg';

const Hero: React.FC<CarouselProps> = ({ items }) => {
    return (
        <div id="hero">
            <div className="page-navbar">
                <a href="#news">News</a>
                <a href="#latest">Latest</a>
                <a href="#about">About</a>
            </div>
            <div className="hero-contents">
                <div className="hero-image">

                </div>
                <div className="carousel-container">
                    <Carousel items={items}>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Hero;





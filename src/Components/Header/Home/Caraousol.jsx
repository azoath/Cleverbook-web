import React, { useState } from 'react';
import arrowleft from '../../../assets/arrow-left.svg';
import arrowright from '../../../assets/arrow-right.svg';
import caraousol1 from '../../../assets/caraousol-1.svg';
import { default as caraousol2, default as caraousol3 } from '../../../assets/caraousol-2.svg';
import caraousol4 from '../../../assets/caraousol-4.svg';
import './Caraousol.css';

const Caraousol = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const detail = [
        {
            image: caraousol1,
            h1: 'Purpose built and ever improving tech',
            p: 'Our demand forecasting engine has been meticulously built while our ML engine constantly trains on years of data and is ever evolving',
        },
        {
            image: caraousol2,
            h1: 'Deep Domain expertise',
            p: 'Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.',
        },
        {
            image: caraousol3,
            h1: 'A focus on KPIs that matter',
            p: 'Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.',
        },
        {
            image: caraousol4,
            h1: 'Ease of use, for everyone',
            p: 'With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.',
        },
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? detail.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === detail.length - 1 ? 0 : prevIndex + 1));
    };

    const { image, h1, p } = detail[currentIndex];

    return (
        <div className='c-wrapper'>
            <div className="c-container">
                <div className="c-title">
                    <h1>Get Crest and get...</h1>
                </div>
                <div className="caraousol">
                    <div className="caraousol-controls">
                        <div className="arrowleft" onClick={handlePrevClick}>
                            <img src={arrowleft} alt="Previous" />
                        </div>
                    </div>
                    <div className="caraousol-container">
                        <img src={image} alt="Carousel" />
                        <div className="c-content">
                            <h2 className='h2'>{h1}</h2>
                            <p className='text-medium'>{p}</p>
                        </div>
                    </div>
                    <div className="caraousol-controls">
                        <div className="arrowright" onClick={handleNextClick}>
                            <img src={arrowright} alt="Next" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Caraousol;

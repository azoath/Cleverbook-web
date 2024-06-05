import React from 'react';
import HeroLeft from '../../../assets/hero-left.svg';
import HeroRight from '../../../assets/hero-right.svg';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1>Every order <br />fulfilled, <span>on time.</span></h1>
          </div>
          <div className="hero-para">
            <p>Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
          </div>
          <div className="hero-button">
            <button>Get Started with Crest</button>
            <img src={HeroLeft} alt="Hero Left" />
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroRight} alt="Hero Right" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

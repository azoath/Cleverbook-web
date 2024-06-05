import React, { useEffect, useRef } from 'react';
import FounderImage from '../../../assets/Founders.webp';
import './Founder.css';

const Founder = () => {
  const leftRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) {
      observer.observe(leftRef.current);
    }

    return () => {
      if (leftRef.current) {
        observer.unobserve(leftRef.current);
      }
    };
  }, []);

  return (
    <section className='founder-wrapper'>
      <div className="founder-container">
        <div className="f-left" ref={leftRef}>
          <img src={FounderImage} alt="Founders" />
          <div className="f-content">
            <p>Rahul Vishwakarma, Akhil Kumar & Yogesh Byahatti - <span>Founders</span></p>
          </div>
        </div>
        <div className="f-right">
          <h1>From the founders</h1>
          <p>We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that.</p>
          <p>Thank you for checking out Crest, and we hope to help you always be in stock!</p>
          <button onClick={() => console.log('Learn more clicked!')}>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Founder;

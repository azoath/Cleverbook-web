import React, { useEffect, useRef } from 'react';
import running1 from '../../../assets/running-1.svg';
import running10 from '../../../assets/running-10.svg';
import running11 from '../../../assets/running-11.svg';
import running12 from '../../../assets/running-12.svg';
import running13 from '../../../assets/running-13.svg';
import running14 from '../../../assets/running-14.svg';
import running15 from '../../../assets/running-15.svg';
import running2 from '../../../assets/running-2.svg';
import running3 from '../../../assets/running-3.svg';
import running4 from '../../../assets/running-4.svg';
import running5 from '../../../assets/running-5.svg';
import running6 from '../../../assets/running-6.svg';
import running7 from '../../../assets/running-7.svg';
import running8 from '../../../assets/running-8.svg';
import running9 from '../../../assets/running-9.svg';
import './ReviewImages.css';

const images = [
  running1, running2, running3, running4, running5,
  running6, running7, running8, running9, running10,
  running11, running12, running13, running14, running15,
];

const ReviewImages = () => {
  const imageContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const scrollImages = () => {
      if (imageContainerRef.current) {
        imageContainerRef.current.scrollLeft += 1;
        if (imageContainerRef.current.scrollLeft >= imageContainerRef.current.scrollWidth - imageContainerRef.current.clientWidth) {
          imageContainerRef.current.scrollLeft = 0;
        }
      }
    };

    scrollIntervalRef.current = setInterval(scrollImages, 1); // Adjust interval as needed for smoothness

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="running-images" ref={imageContainerRef}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Running ${index}`} />
      ))}
    </div>
  );
};

export default ReviewImages;

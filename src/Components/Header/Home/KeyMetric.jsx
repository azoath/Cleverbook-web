import React from 'react';
import './KeyMetric.css';

const KeyMetric = () => {
  return (
    <div className='km-wrapper'>
      <div className="km-container">
        <div className="timeline">
          <div className="timeline-left"></div>
          <div className="timeline-right">
            <a href="#stockouts">Stockouts</a>
            <a href="#cash-recovery-cycle">Cash Recovery Cycle</a>
            <a href="#revenue">Revenue</a>
          </div>
        </div>
        <div className="content">
          <h1><span>Content Title</span></h1>
          <p>Content text goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default KeyMetric;

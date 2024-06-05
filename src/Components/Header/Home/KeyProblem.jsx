import React from 'react';
import img1 from '../../../assets/img-1.svg';
import img2 from '../../../assets/img-2.svg';
import img3 from '../../../assets/img-3.svg';
import img4 from '../../../assets/img-4.svg';
import './KeyProblem.css';

const KeyProblem = () => {
  return (
    <div className='kp-wrapper'>
      <div className="kp-container">
        <div className="kp-title">
            <h1>Four key questions answered by Crest</h1>
        </div>
        <div className="kp-boxes">
            <div className="kp-box">
                <img src={img1} alt="" />
                <h2>What to order</h2>
                <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
            </div>
            <div className="kp-box">
                <img src={img2} alt="" />
                <h2>When to order</h2>
                <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
            </div>
            <div className="kp-box">
                <img src={img3} alt="" />
                <h2>How much to stock</h2>
                <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
            </div>
            <div className="kp-box">
                <img src={img4} alt="" />
                <h2>Where to place</h2>
                <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KeyProblem

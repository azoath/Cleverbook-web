import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../assets/logo1.png';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer-wrapper'>
      <div className='footer-company'>
        <img src={logo} alt="" className='logo'/>
        <p>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
      </div>
      <div className='footer-explore'>
        <h3>Explore</h3>
        <ul>
          <li>Product</li>
          <li>Pricing</li>
          <li>Customer Stories</li>
          <li>Career</li>
        </ul>
      </div>
      <div className='footer-learn'>
        <h3>Learn</h3>
        <ul>
          <li>About us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='footer-address'>
        <h3>Contact Crest</h3>
        <p>sales@getcrest.ai</p>
        <p>Registered Office: <br />
        1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</p>
        <p>Corporate Office: <br />
        291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102</p>
        <div className='footer-social'>
          <FontAwesomeIcon icon={faTwitter} className='social-icon' />
          <FontAwesomeIcon icon={faFacebook} className='social-icon' />
          <FontAwesomeIcon icon={faInstagram} className='social-icon' />
          <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='footer-copyright-top'>
          <p>Copyright 2024 Crest</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <p>Conifer Innovations Private Limited</p>
        <p>CIN: U72900KA2022PTC163144</p>
      </div>
      <FontAwesomeIcon icon={faArrowUp} className='scroll-to-top' onClick={scrollToTop} />
    </div>
  );
}

export default Footer;

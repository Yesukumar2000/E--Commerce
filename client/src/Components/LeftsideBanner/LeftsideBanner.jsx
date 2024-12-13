import React from 'react'
import logo from '../../assets/images/logo.png'
import image1 from '../../assets/images/bangles.webp';
import image2 from '../../assets/images/rings.webp';
import './LeftsideBanner.css';

function LeftsideBanner() {
  return (
        <div className="section">
        <div className="logo">
          <img src={logo} alt="Logo" /> 
          <h3>Jewellery</h3>
        </div>
        <div className="images">
          <img src={image1} alt="Bangels" className="image" />
          <img src={image2} alt="Rings" className="image" />
        </div>
    </div>
  )
}

export default LeftsideBanner;
import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>srivastavamohita18@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/mohita-srivastava-aa4a07160">
            <Linkedin color="white" size={'3rem'} />
          </a>
          <Facebook color="white" size={'3rem'} />
          <Gitub color="white" size={'3rem'} />
          <a href="https://www.instagram.com/mesmerizing_mohita?igsh=ZXRpOHczZXR4bDd1">
            <Insta color="white" size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

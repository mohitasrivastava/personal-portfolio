import React, { useContext } from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import MohitaCV from './MohitaCV.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? 'white' : '' }}>About Me And</span>
        <span>My Awesome Services</span>
        <spane>
          My career objective is to work enthusiastically with devotion.
          <br />
          Dedicated web developer using HTML, CSS, JS, React, NodeJs, Python,
          Django. <br />
          Proactive individual and can work in the field of Embedded system,
          <br />
          Web Development, Full Stack Developer
        </spane>
        <a href={MohitaCV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Spline, Three.js, Html, Css, SASS, Bootstrap'}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={
              'Html, Css, JavaScript, React, Nodejs, Express, Python, Django'
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: '19rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'Embedded System'}
            detail={'Atmega16, Sensors, GSM, Bluetooth'}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

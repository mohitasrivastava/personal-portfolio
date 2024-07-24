import React, { useContext } from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
// import MohitaCV from './MohitaCV.pdf';
import Mohita from './Mohita.pdf';

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
          Experienced Software Developer Specializing in Financial Technology
          Solutions
          <br />
          Proactive individual and Dedicated web developer/Full Stack Developer
          <br />
          ****Engineer by profession****
          <br />
          ****Entrepreneur by heart****
          <br />
          **Business developer by mind***
        </spane>
        <a href={Mohita} download>
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
            heading={'Frontend'}
            detail={'HTML, CSS, Javascript, Reactjs, Figma, Spline, SASS, ES6'}
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
            heading={'Backend'}
            detail={'Nodejs, ExpressJS, Python, Django, MongoDB, PSQL,'}
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
            heading={'Miscellaneous'}
            detail={'AWS, LLM, Atmega16, Sensors, GSM, Prompt Engineering'}
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

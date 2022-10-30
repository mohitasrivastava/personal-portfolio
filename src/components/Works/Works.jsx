import React, { useContext } from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import mongodb from '../../img/mongodb.png';
import react from '../../img/react.png';
import redux from '../../img/redux.png';
import js from '../../img/js.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? 'white' : '' }}>
            Skills and Experience
          </span>
          <span>Brands & Clients</span>
          <spane>
            Strong in design and integration with intuitive problem-solving
            skills.
            <br />
            Passionate about implementing and launching new projects.
            <br />
            Ability to translate business requirements into technical solutions.
            <br />
          </spane>
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}
          <div className="exp-year">
            <div className="exp">
              <h3>2021-2022</h3>
              <h3> Frontend Engineer</h3>
            </div>
            <div className="exp">
              <h3>2020-2020</h3>
              <h3> Telecom Engineer</h3>
            </div>
            <div className="exp">
              <h3>2019-2019</h3>
              <h3> INtern Embedded System</h3>
            </div>
          </div>

          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongodb} alt="" />
          </div>{' '}
          <div className="w-secCircle">
            <img src={redux} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

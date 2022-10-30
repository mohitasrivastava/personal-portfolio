import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Github from '../../img/github.png';
import tv from '../../img/tv.png';
import MERN from '../../img/MERN.png';
import news from '../../img/news.png';
import smarthome from '../../img/smarthome.png';

import Ecommerce from '../../img/ecommerce.png';

import { themeContext } from '../../Context';
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={tv} alt="" />
          <a href="https://mohitasrivastava-makes-great-sites.netlify.app">
            <img src={Github} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <a href="https://mohitasrivastava-makes-great-sites.netlify.app">
            <img src={Github} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MERN} alt="" />
          <a href="https://mohitasrivastava-makes-great-sites.netlify.app">
            <img src={Github} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={smarthome} alt="" />
          <a href="https://mohitasrivastava-makes-great-sites.netlify.app">
            <img src={Github} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={news} alt="" />
          <a href="https://mohitasrivastava-makes-great-sites.netlify.app">
            <img src={Github} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

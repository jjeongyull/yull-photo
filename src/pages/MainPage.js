import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';


// img
import main_1 from '../assets/images/main_1.jpg';
import main_2 from '../assets/images/main_2.jpg';
import main_3 from '../assets/images/main_3.jpg';
import main_4 from '../assets/images/main_4.jpg';

const MainPage = () => {
  return (
    <Swiper
      className="mySwiper"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img className='s-img' src={main_1} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='s-img' src={main_2} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='s-img' src={main_3} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='s-img' src={main_4} />
      </SwiperSlide>
    </Swiper>
  )
}

export default MainPage
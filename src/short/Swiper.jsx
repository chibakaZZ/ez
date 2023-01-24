import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div>
      <Swiper
        className='swiperstyle'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={800}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide> <img src="https://th.bing.com/th/id/R.4c27befc6809cb31b2822ba66d945a32?rik=5aGzNMwIAmr7og&pid=ImgRaw&r=0" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://th.bing.com/th/id/R.4c27befc6809cb31b2822ba66d945a32?rik=5aGzNMwIAmr7og&pid=ImgRaw&r=0" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://th.bing.com/th/id/R.4c27befc6809cb31b2822ba66d945a32?rik=5aGzNMwIAmr7og&pid=ImgRaw&r=0" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://th.bing.com/th/id/R.4c27befc6809cb31b2822ba66d945a32?rik=5aGzNMwIAmr7og&pid=ImgRaw&r=0" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
};
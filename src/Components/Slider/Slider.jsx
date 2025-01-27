import Slider1 from "../../assets/Slider1.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <div className="flex justify-center items-center w-full px-52 pt-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="flip"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full flex justify-center items-center"
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            className="flex items-center justify-center bg-center bg-cover w-[100%]"
            src={Slider1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            className="bg-center bg- w-[100%]"
            src={Slider2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            className="bg-center bg-cover w-[100%]"
            src={Slider3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

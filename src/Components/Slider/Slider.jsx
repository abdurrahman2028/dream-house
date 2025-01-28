import Slider1 from "../../assets/Slider1.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";

import {
  FaBath,
  FaBed,
  FaWarehouse,
  FaDollarSign,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <div className="flex justify-center items-center w-full px-52 py-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="flip"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[60vh] flex justify-center items-center"
      >
        <SwiperSlide className="flex justify-center items-center">
          <div
            className="relative bg-cover bg-center bg-no-repeat h-[100%]"
            style={{
              backgroundImage: `url(${Slider1})`,
            }}
          >
            <div className="absolute bottom-5 right-5 bg-white p-3 flex items-center text-[25px] font-semibold leading-none">
              <FaDollarSign />
              <p className="">19,435</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div
            className="relative bg-cover bg-center bg-no-repeat h-[100%] py-20"
            style={{
              backgroundImage: `url(${Slider2})`,
            }}
          >
            <div className="absolute bottom-5 right-5 bg-white p-3 flex items-center text-[25px] font-semibold leading-none">
              <FaDollarSign />
              <p className="">38,435</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div
            className="relative bg-cover bg-center bg-no-repeat h-[100%] py-20"
            style={{
              backgroundImage: `url(${Slider3})`,
            }}
          >
            <div className="absolute bottom-5 right-5 bg-white p-3 flex items-center text-[25px] font-semibold leading-none">
              <FaDollarSign />
              <p className="">53,435</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

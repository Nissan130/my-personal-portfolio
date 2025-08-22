import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./ProjectImageSlider.css"; // 👈 custom styles

const ProjectImageSlider = ({ images }) => {
  return (
    <div className="w-full max-w-4xl  py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl shadow-xl projectSlider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center bg-black rounded-2xl">
            <img
              src={img}
              alt={`Project screenshot ${index + 1}`}
              className="sliderImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectImageSlider;

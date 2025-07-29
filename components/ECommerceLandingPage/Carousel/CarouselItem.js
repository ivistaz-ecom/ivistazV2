"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselData } from "@/utils/CarouselData";

const CarouselItem = ({ sliderRef, setSlideIndex }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (oldIndex, newIndex) => setSlideIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    
    <Slider ref={sliderRef} {...sliderSettings}>
      {CarouselData.map((item, index) => (
        <div key={index} className="">
          <li className="container mx-auto flex flex-col">
            {/* Title */}
            <div className="py-3 px-4">
              <h3 className="lg:text-3xl text-2xl text-white text-left tracking-wide">
                {item.title}
              </h3>
            </div>

            {/* Description (Expands to Fill Remaining Space) */}
            <p className="py-4 px-4 text-md font-monument-light text-left text-white flex items-center tracking-wide">
              {item.desc}
            </p>
          </li>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselItem;

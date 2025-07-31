"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselData } from "@/utils/CarouselData";

const CarouselItem = ({ sliderRef, setSlideIndex }) => {
  const [slideIndex, setLocalSlideIndex] = useState(0); // local state for range slider
  const maxSlides = CarouselData.length - 1;

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    touchThreshold: 100,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    beforeChange: (oldIndex, newIndex) => {
      setSlideIndex(newIndex);
      setLocalSlideIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, speed: 600 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, speed: 500 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, speed: 400 },
      },
    ],
  };

  // When range slider changes, go to that slide
  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    setLocalSlideIndex(value);
    sliderRef.current?.slickGoTo(value);
  };

  return (
    <div className="relative">
      {/* Background line */}
      <div className="absolute top-2 left-3 w-full h-[2px] bg-[#565656] z-0"></div>

      <Slider ref={sliderRef} {...sliderSettings}>
        {CarouselData.map((item, index) => (
          <div key={index} className="px-3">
            <div className="relative">
              {/* White dot */}
              <div className="w-4 h-4 bg-white rounded-full mb-6 relative z-10"></div>
              {/* Content */}
              <div className="text-left">
                <h3 className="lg:text-3xl text-2xl text-white mb-4 font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-md text-gray-300 leading-relaxed tracking-wide">
                  {typeof item.desc === "string" ? item.desc : item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselItem;

// "use client";

// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useEffect, useState, useCallback } from "react";
// import { CarouselData } from "@/utils/CarouselData";

// export default function CarouselItem() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "start",
//       dragFree: false,
//       speed: 8, // smoother speed
//       slidesToScroll: 1,
//       slidesToShow: 4,
//       breakpoints: {
//         "(max-width: 640px)": { slidesToScroll: 1 },
//         "(max-width: 768px)": { slidesToScroll: 1 },
//         "(max-width: 1024px)": { slidesToScroll: 1 },
//       },
//     },
//     [Autoplay({ delay: 2500, stopOnInteraction: false })] // auto-scroll
//   );

//   // Track selected index
//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSlideIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <div className="relative">
//       {/* Background line */}
//       <div className="absolute top-2 left-3 w-full h-[2px] bg-[#565656] z-0"></div>

//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {CarouselData.map((item, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_25%] px-3 sm:flex-[0_0_33.33%] md:flex-[0_0_50%] lg:flex-[0_0_100%]"
//             >
//               <div className="relative">
//                 {/* White dot */}
//                 <div className="w-4 h-4 bg-white rounded-full mb-6 relative z-10"></div>

//                 {/* Content */}
//                 <div className="text-left">
//                   <h3 className="lg:text-3xl text-2xl text-white mb-4 font-semibold tracking-wide">
//                     {item.title}
//                   </h3>
//                   <p className="text-md text-gray-300 leading-relaxed tracking-wide">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

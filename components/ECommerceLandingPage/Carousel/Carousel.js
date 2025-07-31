"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NewsAndInsightsItem from "./CarouselItem";
import CarouselItem from "./CarouselItem";
import { AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const maxSlides = 5; // Total slides - 1 (since indexing starts at 0)

  return (
    <section className="py-7 md:py-14 flex flex-col gap-16">
      {/* <input
        type="range"
        min={0}
        max={maxSlides}
        value={slideIndex}
        onChange={(e) => sliderRef.current?.slickGoTo(Number(e.target.value))}
        className="w-full container mx-auto cursor-pointer rounded-full"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
                      background: `linear-gradient(to right, #fff ${
              (slideIndex / maxSlides) * 100
            }%, #565656 ${(slideIndex / maxSlides) * 100}%)`,
          height: "2px",
          borderRadius: "9999px",
        }}
      /> */}

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          // margin-top: px;
        }
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>

      <div className=" mx-auto w-full flex flex-col lg:flex-row justify-between gap-10 px-4">
        {/* Left Section */}

        {/* Right Section (Slider) */}
        <div className="w-full container mx-auto">
          <CarouselItem sliderRef={sliderRef} setSlideIndex={setSlideIndex} />
        </div>
      </div>

      {/* Slider Controls */}
      <div className="w-full container mx-auto flex flex-col md:flex-row items-center justify-center lg:justify-end gap-3 px-4 -mt-10">
        <div className="flex gap-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous Slide"
            className=""
          >
            {/* <Image
              src="/e-commerce/white-arrow-right.png"
              width={25}
              height={25}
              alt="Previous"
              className="rotate-180 border rounded-full p-2 h-10 w-10 hover:bg-red-600 duration-200"
            /> */}
            <AiOutlineArrowRight className="text-[#ED1C24] hover:text-white transition rotate-180 border hover:border-[#ED1C24] rounded-full p-2 h-12 w-12 hover:bg-red-600 duration-200 bg-white" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next Slide"
            className=""
          >
            {/* <Image
              src="/e-commerce/white-arrow-right.png"
              width={25}
              height={25}
              alt="Next"
            /> */}
            <AiOutlineArrowRight className="text-[#ED1C24] hover:text-white transition border rounded-full p-2 h-12 w-12 hover:border-[#ED1C24] hover:bg-red-600 duration-200 bg-white"/>
          </button>
        </div>

        {/* Slider Progress Bar */}
      </div>
    </section>
  );
};

export default Carousel;
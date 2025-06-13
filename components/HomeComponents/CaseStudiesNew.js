"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/new-home-page/case-studies/img-1.png",
    title: "300,000 Unique Leads in 3 Years",
    subtitle: "For a Global Retail Corporation’s MSME CSR Project",
    textColor: "text-[#000000]",
  },
  {
    image: "/new-home-page/case-studies/img-2.png",
    title: "10.8% Lead Conversion Rate",
    subtitle:
      "B2B Email Marketing Success for a Consulting Organization in the Social Impact Space",
    textColor: "text-[#64188D]",
  },
  {
    image: "/new-home-page/case-studies/img-3.png",
    title: "50 Thought Leadership Assets",
    subtitle: "For a global B2B Hi-Tech Company",
    textColor: "text-[#1416B4]",
  },
];

const CaseStudiesNew = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Embla Carousel */}
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] relative group" key={index}>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={600}
                className="w-full h-[600px] object-cover"
              />

              {/* Overlay card */}
              <div className="lg:absolute bottom-0 flex lg:left-10 bg-white lg:px-6 py-5 max-w-md shadow-lg justify-between items-center lg:w-[800px] group hover:shadow-xl transition-all duration-300">
                <div>
                  <h4 className={`${slide.textColor} lg:text-2xl font-bold mb-1 px-4`}>
                    {slide.title}
                  </h4>
                  <p className="text-gray-800 m-0 px-4">{slide.subtitle}</p>
                </div>
                {/* <div className="relative ml-4">
                  <span className="block text-[#000]  font-bold text-2xl overflow-hidden relative w-6">
                    <span className="relative  bg-gradient-to-r from-cyan-500 to-blue-500 left-[-100%] group-hover:left-0 transition-all duration-300 ease-in-out">
                      <FaArrowRight />
                    </span>
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white"
      >
        <Image
          src="/new-home-page/right.svg"
          width={30}
          height={30}
          alt="Prev"
        />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white"
      >
        <Image
          src="/new-home-page/left.svg"
          width={30}
          height={30}
          alt="Next"
        />
      </button>
    </div>
  );
};

export default CaseStudiesNew;

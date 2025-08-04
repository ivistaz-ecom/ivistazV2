"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AutoScrollSection() {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Show 3 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous effect
    speed: 6000, // Smooth speed
    cssEase: "linear", // For continuous flow
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const items = [
    "Already have an internal team?",
    "Need one from scratch?",
    "We adapt to your setup.",
  ];

  return (
    <div className="w-full overflow-hidden px-10 lg:px-0 container mx-auto">
      <Slider {...settings}>
        {items.map((text, index) => (
          <div key={index}>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/new-home-page/star.png"
                width={30}
                height={30}
                alt="star"
              />
               <p className="text-lg lg:text-2xl font-monument-light">{text}</p>
            </div>
            
             
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

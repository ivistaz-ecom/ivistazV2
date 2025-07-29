import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel/Carousel";

const HowWeWork = () => {
  return (
    <div className="bg-black text-white py-10 overflow-hidden w-full">
      <h2 className="text-center text-4xl md:text-5xl font-monument-light lg:mb-16 mb-7">
        How We <span className="text-[#EA561F]"> Work</span>
      </h2>
      <div>
        <Image
          src="/e-commerce/how.png"
          width={1200}
          height={800}
          alt="how we work"
          className="w-full h-full"
        />
      </div>
      <div>
        <h4 className="text-center text-2xl lg:text-3xl font-monument-light py-10">
          A Plug-and-Play Team That Fits Right In
        </h4>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-3 lg:items-center items-start lg:px-0 px-10 justify-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/new-home-page/star.png"
            width={30}
            height={30}
            alt="star"
          />
          <p className="text-lg lg:text-2xl font-monument-light">
            Already have an internal team?
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/new-home-page/star.png"
            width={30}
            height={30}
            alt="star"
          />
          <p className="text-lg lg:text-2xl font-monument-light">Need one from scratch?</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/new-home-page/star.png"
            width={30}
            height={30}
            alt="star"
          />
          <p className="text-lg lg:text-2xl font-monument-light">
            We adapt to your setup.
          </p>
        </div>
      </div>
      <div>
        <p className="font-monument-light text-center pt-10">
          From strategy to reporting, we deliver end-to-end support that helps
          you hit growth goals while staying in control.
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;

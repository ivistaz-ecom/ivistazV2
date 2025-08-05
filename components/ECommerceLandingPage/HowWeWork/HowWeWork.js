import React from "react";
import Image from "next/image";
import AutoScrollSection from "./AutoScrollSection";

const HowWeWork = () => {
  return (
    <div className="bg-black text-white py-10 overflow-hidden w-full">
      <h2 className="text-center text-4xl md:text-5xl font-monument-light lg:mb-16 mb-7">
        How We <span className="text-[#ff5c00]"> Work</span>
      </h2>
      <div>
        <Image
          src="/e-commerce/how-we-work.webp"
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
      <AutoScrollSection />
      <div>
        <p className="font-monument-light text-center pt-10 px-4">
          From strategy to reporting, we deliver end-to-end support that helps
          you hit growth goals while staying in control.
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;

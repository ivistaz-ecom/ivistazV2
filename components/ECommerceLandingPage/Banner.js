import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/generation-for-tech/blue-bg-poster.jpg" // fallback image for fast loading
        >
          <source src="/e-commerce/banner-ecommerce.mp4" type="video/mp4" />
          {/* <source src="/e-commerce/banner-ecom.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white flex flex-col items-center justify-center pt-[500px] h-full text-center">
          <h1 className="text-2xl md:text-[60px]">
            Performance Marketing for{" "} <br className="md:hidden" />
            <span className="text-2xl md:text-[60px] text-[#EA561F]">
              E-Commerce Brands{" "}
            </span>
          </h1>

          <h1 className="text-2xl md:text-[60px]">
            <span className="text-2xl md:text-[60px] text-white">
              That Want to{" "}
            </span>
            <span className="text-[#EA561F]">Scale Smarter</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;

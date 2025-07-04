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
        >
          <source src="/generation-for-tech/hero-banner.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-[80px] font- lg:mb-4">
            Smarter Lead Generation <span className="text-[#FF5C00] font-monument-semibold"> +</span>{" "}
          </h1>
          <h1 className="text-3xl md:text-[80px] font- lg:mb-3">
            Scalable Digital Execution{" "}
          </h1>
          <h1 className="text-3xl md:text-[80px] font- mb-4">
            for <span className="text-[#FF5C00] font-"> Tech Companies</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
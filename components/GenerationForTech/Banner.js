import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/generation-for-tech/banner-img.png)] bg-cover bg-center h-screen relative z-10">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-20 text-white flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-7xl font-monument-semibold lg:mb-4">
            Smarter Lead Generation <span className="text-[#FF5C00] font-monument-semibold"> +</span>{" "}
          </h1>
          <h1 className="text-3xl md:text-7xl font-monument-semibold lg:mb-4">
            Scalable Digital Execution{" "}
          </h1>
          <h1 className="text-3xl md:text-7xl font-monument-semibold mb-4">
            for <span className="text-[#FF5C00] font-monument-semibold"> Tech Companies</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;

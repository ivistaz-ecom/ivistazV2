import React from "react";

const WeWork = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto lg:h-[300px] lg:py-0 py-10 lg:w-[80%] flex flex-col justify-center items-center">
          <p className="text-xl md:text-3xl font-monument-light text-center text-black">
            We work with e-commerce brands to improve what matters most:
          </p>
          <p className="text-xl md:text-3xl font-monument-light text-center text-black pt-7">
            <span className="text-[#EA561F]">
              {" "}
              conversion rates, repeat purchases,
            </span>{" "}
            and <span className="text-[#EA561F]"> ROAS.</span> With sharp,
            creative, channel-specific strategies and performance-first
            execution, we help you grow without overspending.
          </p>
        </div>
      </div>
    </>
  );
};

export default WeWork;

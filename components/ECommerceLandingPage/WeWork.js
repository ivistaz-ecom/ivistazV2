import React from "react";

const WeWork = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto lg:h-[300px] lg:py-0 py-10 lg:w-[80%] flex flex-col justify-center items-center">
          <p className="text-xl md:text-3xl font-monument-light text-center text-black px-5">
            We work with e-commerce brands to improve what matters most:{" "}
            <span className="text-[#ff5c00]">
              {" "}
              conversion rates, repeat purchases,
            </span>{" "}
            and <span className="text-[#ff5c00]"> ROAS.</span>
          </p>
          <p className="text-xl md:text-3xl font-monument-light text-center text-black pt-7 lg:px-0 px-5">
            With sharp, creative, channel-specific strategies and
            performance-first execution, <br className="hidden lg:block" /> we
            help you grow without overspending.
          </p>
        </div>
      </div>
    </>
  );
};

export default WeWork;

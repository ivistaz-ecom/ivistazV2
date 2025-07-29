import React from "react";
import ReadTheCaseStudyButton from "./ReadTheCaseStudy";

const Results = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto lg:h-[300px] lg:py-0 py-10 lg:w-[80%] flex flex-col justify-center items-center">
          <p className="text-3xl md:text-5xl font-monument-light text-center text-black">
            Results You Can<span className="text-[#ED1C24]"> Measure</span>
          </p>
          <p className="text-lg lg:px-0 px-2 md:text-3xl font-monument-light text-center text-black pt-7">
            We partnered with India’s leading water purifier brand to boost
            their online sales through carefully crafted search engine marketing
            campaigns, optimizing for intent, visibility, and efficiency across
            platforms.
          </p>
        </div>
        <div>
          <ReadTheCaseStudyButton />
        </div>
      </div>
    </>
  );
};

export default Results;

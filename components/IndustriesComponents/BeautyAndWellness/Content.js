import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <h1 className="text-[40px] text-[#ff0000] uppercase font-monument-bold text-center lg:py-10 pt-5">
            BEAUTY & WELLNESS
          </h1>
          <p className="text-center lg:text-lg font-monument-light lg:p-0 p-5">
            The beauty and wellness market has been growing at a rapid pace in
            India. The market in India was valued at INR 901.07 billion in 2018
            and is{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://www.bwwellbeingworld.com/article/how-beauty-wellness-sector-emerge-as-a-thriving-sector-in-india-408985"
            >
              forecasted to reach INR 2,463.49 billion by the year 2024.
            </Link>
          </p>

          <div className="flex justify-center flex-col items-center lg:p-0 p-5">
            <p className="lg:text-2xl text-center font-monument-bold lg:w-[90%] pt-5 lg:pt-8 pb-0 lg:pb-10">
              What is notable is that the beauty and wellness market today
              straddles the affluent as well as the middle class, the female as
              well as the male sexes, the synthetic brands as well as the
              organic brands. The sheer number of new entrants, especially in
              the ‘natural’, ‘vegan’ ‘safe’ and ‘sustainable’ categories is
              testimony to the exponential growth of the industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

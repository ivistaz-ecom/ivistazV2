import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <h1 className="text-[40px] text-[#ff0000] uppercase font-monument-bold text-center lg:pt-10 pt-5">
            FASHION & ACCESSORIES
          </h1>
          <p className="text-center lg:text-xl font-monument-bold lg:py-8 p-5">
            According to an article by the Times of India, the fashion industry
            is poised to{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://timesofindia.indiatimes.com/blogs/voices/indian-apparel-and-fashion-market-in-next-five-years-industry-growth-challenges-and-opportunities/"
            >
              grow into a $106 billion industry by 2026,
            </Link>{" "}
            bringing up the Indian fashion market on maps.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;

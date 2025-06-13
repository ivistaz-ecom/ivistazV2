import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <h1 className="text-[40px] text-[#ff0000] uppercase font-monument-bold text-center lg:py-10 pt-5">
            AUTOMOBILES
          </h1>
          <p className="text-center lg:text-lg font-monument-light lg:p-0 p-5">
            <Link
              target="_blank"
              className="underline"
              href="https://ivistaz.com/pdf/THE_AUTOMOBILE_SECTOR_IN_INDIA.pdf"
            >
              According to the Ministry of Heavy Industries,
            </Link>{" "}
            Government of India, the automotive industry is likely to see
            significant transformations at a global level in the next ten years.
            Among the notable changes will be the shift of growth in demand for
            automobiles from developed nations to developing nations (mainly
            BRICS).
          </p>

          <div className="flex justify-center flex-col items-center lg:p-0 p-5">
            <p className="lg:py-5 lg:text-lg font-monument-light text-center lg:w-[90%]">
              India aims to double its auto industry size to Rs. 15 trillion by
              end of the year 2024 (Source: Ministry of Heavy Industries).
            </p>
            <p className="lg:text-2xl text-center font-monument-bold lg:w-[90%] pt-5 lg:pt-3 pb-0 lg:pb-10">
              Your focus would be on strengthening your market share in India by
              growing your sales and dealer network through digital marketing
              for the automotive industry. Through our online marketing service
              for automobile companies, iVistaz can support you in this journey
              and help:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

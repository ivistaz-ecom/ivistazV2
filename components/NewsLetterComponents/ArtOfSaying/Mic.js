import Image from "next/image";
import React from "react";

const Mic = () => {
  return (
    <>
      <div className="container mx-auto lg:flex items-center justify-center lg:py-10 gap-10">
        <div>
          <Image
            src="/news-letter/mic.svg"
            alt="mic"
            width={350}
            height={350}
            className=""
          />
        </div>
        <div className="space-y-5 lg:px-0 px-4">
          <p className="shadow text-[#092F87] p-4 rounded-2xl font-monument-bold border">
            Drug legalisation by our very own one day Prime Minister (Democracy
            may not be ready)
          </p>
          <p className="shadow text-[#092F87] p-4 rounded-2xl font-monument-bold border">
            4-day work week by an exhausted employee who comes in on Saturdays
            (ambitious!)
          </p>
          <p className="shadow text-[#092F87] p-4 rounded-2xl font-monument-bold border">
            The need for speed/travel by someone who likes to hide behind his
            helmet
          </p>
          <p className="shadow text-[#092F87] p-4 rounded-2xl font-monument-bold border">
            Sometimes, one doesn’t need many words to express themselves
          </p>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center py-5 gap-10">
        <p className="text-center lg:w-[75%] font-monument-light text-lg lg:px-0 px-4">
          We hope the energy carries into next week for round two of the
          madness. By the time you’re reading this, the competition will be
          over, so we hope whichever team won treats us!
        </p>
      </div>
    </>
  );
};

export default Mic;

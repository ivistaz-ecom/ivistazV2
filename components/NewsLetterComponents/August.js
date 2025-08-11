import Image from "next/image";
import React from "react";

const August = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div>
          <Image
            src="/news-letter/aug.svg"
            alt="august"
            width={400}
            height={400}
            className="object-cover lg:px-0 px-4"
          />
        </div>
        <div className="flex items-center justify-center lg:py-10 py-5">
          <p className="text-center lg:w-[75%] font-monument-bold text-lg lg:px-0 px-4">
            With the new month rolling in, we hoped that the rains would force
            the HR to give us work from home. Alas, the sun has persevered and
            kept the roads clear just enough so that we had to use traffic as an
            excuse to come late.
          </p>
        </div>
      </div>
    </>
  );
};

export default August;

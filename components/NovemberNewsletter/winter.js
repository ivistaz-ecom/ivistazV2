import Image from "next/image";
import React from "react";

const Onam = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pb-10 pb-5">
        <div className="w-full">
          <Image
            src="/nov-newsletter/winter.png"
            alt="grie"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
        <div className="lg:p-10 py-5">
          <Image
            src="/nov-newsletter/desk.svg"
            alt="grie"
            width={900}
            height={900}
            className="lg:px-0 px-4 w-full object-cover"
          />
        </div>
        <div className="">
          <Image
            src="/nov-newsletter/collections.png"
            alt="grie"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
        <p className="text-center text-4xl myriad-pro-bold lg:px-0 px-4 text-[#092F87] lg:py-0 py-5">
          Keerthivasan
        </p>
      </div>
    </>
  );
};

export default Onam;

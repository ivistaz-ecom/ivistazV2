import Image from "next/image";
import React from "react";

const Highlight = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <Image
            src="/sept-newsletter/highlight-2.png"
            alt="grie"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
        <div className="p-10 w-full">
          <Image
            src="/sept-newsletter/painting-2.png"
            alt="grie"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:py-10 py-5">
          <p className="text-center text-[#EC4415] text-3xl lg:px-0 px-4 myriad-pro-semibold">
            And now what everyone has been waiting for
          </p>
          <p className="text-center text-xl py-5 myriad-pro-semibold">
            (and honestly, we know what you guys opened this newsletter only for
            this)
          </p>
        </div>
      </div>
    </>
  );
};

export default Highlight;

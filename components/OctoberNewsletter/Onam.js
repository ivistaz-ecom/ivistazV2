import Image from "next/image";
import React from "react";

const Onam = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <Image
            src="/oct-newsletter/onam.png"
            alt="grie"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
        <div className="lg:p-10 py-5 w-full">
          <Image
            src="/oct-newsletter/group.png"
            alt="grie"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Onam;

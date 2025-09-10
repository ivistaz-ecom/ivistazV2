import Image from "next/image";
import React from "react";

const Winner = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div>
          <video
            src="/sept-newsletter/winner.mp4"
            alt="winner"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-3 items-center justify-center lg:py-10 py-5">
          <p className="text-center lg:text-4xl text-2xl myriad-pro-semibold lg:px-0 px-4">
            Second: Sanjiban and Shusritha
          </p>
          <p className="text-center lg:text-4xl text-2xl myriad-pro-semibold lg:px-0 px-4">
            Special Art Work: Rachel, Shreya, JP and Keerthi
          </p>
        </div>
      </div>
    </>
  );
};

export default Winner;

import Image from "next/image";
import React from "react";

const NoHighlights = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-center">
        <div className="w-full">
          <Image
            src="/nov-newsletter/man.png"
            alt="grie"
            width={500}
            height={500}
            className="lg:px-0 px-4 w-full"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-10">
          <p className="text-start text-[#EC4415] lg:text-6xl  lg:px-0 px-4 myriad-pro-semibold">
            No Highlights Detected
          </p>
          <p className="text-start lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
            Let’s be honest, October didn’t exactly come with standout moments.
            Between looming deadlines, festive prep, and half the team already
            in vacation mode, it felt like a month spent balancing spreadsheets
            and sweets in equal measure.
          </p>
          <p className="text-start lg:w-[80%] myriad-pro-light lg:text-2xl text-xl">
            And while many took a well-deserved break to celebrate and recharge,
            a few dedicated teammates kept the lights on (literally) through the
            holidays — quietly keeping things moving behind the scenes.
          </p>
        </div>
      </div>
    </>
  );
};

export default NoHighlights;

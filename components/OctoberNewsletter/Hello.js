import Image from "next/image";
import React from "react";

const Hello = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center lg:px-0 px-4">
        <div className="flex items-center justify-center lg:py-10">
          <p className="text-center noteworthy-bold lg:text-[40px] text-2xl text-[#E0091C]">
            Hello, October, And Hello Holidays!
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:gap-10 gap-5 items-center justify-center lg:py-10 py-5 lg:px-0 px-4">
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
          Festival season is officially here, and let’s be honest, everyone is
          more focused on planning long weekends than meetings right now.
        </p>
        <p className="text-center lg:w-[80%] myriad-pro-light lg:text-2xl text-xl">
          Between Dasara, Diwali, and a few lucky calendar alignments, we’re
          entering that magical time of year when “actual work” happens in
          between travel plans and festive prep. And yes,  we’re already hearing
          whispers of, “Can we please just WFH until the next holiday?”
        </p>
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
        Can you blame anyone? Office coffee doesn’t quite compete with homemade Diwali snacks.
        </p>
      
      </div>
    </>
  );
};

export default Hello;

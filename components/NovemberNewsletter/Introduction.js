import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center lg:px-0 px-4"></div>
      <div className="flex flex-col items-center justify-center lg:pt-5 pt-0 pb-10 lg:px-0 px-4">
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
          As November rolls in, the coffee gets stronger, the days get shorter,
          and somehow the to-do lists get longer. We’ve officially entered that
          magical time of year when we’re wrapping up projects while secretly
          counting down to Christmas cookies and out-of-office replies. It’s the
          great end-of-year juggle, finishing strong, planning ahead, and trying
          not to lose track of what day it is.
        </p>
       
      </div>
    </>
  );
};

export default Introduction;

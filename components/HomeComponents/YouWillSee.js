import Image from "next/image";
import React from "react";

const YouWillSee = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col justify-center items-center bg-black text-center">
        <h1 className="text-[#DBDBDB] text-3xl md:text-3xl lg:text-6xl font-bold w-3/4">
          You will see it <br className="hidden sm:block" /> where it matters.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center text-[#DBDBDB] text-2xl gap-3 py-10">
        <p className="flex items-center justify-center gap-3">
          More visits.
          <span>
            <Image className="hidden sm:block" src="/new-home-page/star.png" width={40} height={40} alt="Star Icon" />
          </span>
        </p>
        <p className="flex items-center justify-center gap-3">
          More leads.
          <span>
            <Image className="hidden sm:block" src="/new-home-page/star.png" width={40} height={40} alt="Star Icon" />
          </span>
        </p>
        <p className="flex items-center justify-center gap-3">
          More customers.
        </p>
      </div>
    </div>
  );
};

export default YouWillSee;
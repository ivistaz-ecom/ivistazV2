import Image from "next/image";
import React from "react";

const Announcement = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div>
          <Image
            src="/news-letter/announcement.svg"
            alt="announcement"
            width={600}
            height={600}
            className="object-cover lg:px-0 px-4"
          />
        </div>
        <div className="flex items-center justify-center lg:py-10 py-5">
          <p className="text-center lg:w-[80%] font-monument-light text-lg lg:px-0 px-4">
            By now, we hope that everyone has noticed that we have a new team
            member on board. Our newest copywriter, Rachel, brings fresh energy
            to the daily chaos, and shockingly, considering she laughed at our
            jokes in the first week, she might like us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Announcement;

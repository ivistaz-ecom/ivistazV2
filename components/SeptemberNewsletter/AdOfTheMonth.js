import Image from "next/image";
import React from "react";

const AdOfTheMonth = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10">
        <div>
          <Image
            src="/sept-newsletter/ad-of-the-month.svg"
            alt="ad"
            width={600}
            height={600}
            className="lg:py-10 py-5 lg:px-0 px-4"
          />
        </div>
        <div>
          <Image
            src="/sept-newsletter/bahri.png"
            alt="ad"
            width={1200}
            height={1000}
            className="lg:py-10 py-5 lg:px-0 px-4"
          />
        </div>
      </div>
    </>
  );
};

export default AdOfTheMonth;

import Image from "next/image";
import React from "react";

const AdOfTheMonth = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10">
        <div>
          <Image
            src="/oct-newsletter/ad-of-the-month.svg"
            alt="ad"
            width={600}
            height={600}
            className="lg:pb-10 py-5 lg:py-0 lg:px-0 px-4"
          />
        </div>
        <div className="w-full">
          <Image
            src="/oct-newsletter/sun-care.png"
            alt="Sun Care"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
      </div>
{/* 
         <div className="flex flex-col items-center justify-center">
         <div className="lg:p-10 py-5 w-full">
          <Image
            src="/oct-newsletter/ad-of-the-month.svg"
            alt="Ad of the Month"
            width={400}
            height={400}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
       
        
      </div> */}
    </>
  );
};

export default AdOfTheMonth;

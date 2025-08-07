import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <div>
          <Image
            className="w-full lg:h-full h-60 object-cover pt-18"
            src="/industries/law-banner.png"
            width={800}
            height={600}
            alt="banner appliances"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;

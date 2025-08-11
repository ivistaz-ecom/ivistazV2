import Image from "next/image";
import React from "react";

const PictureOfTheMonth = () => {
  return (
    <>
      <div className="py-10 container mx-auto">
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-32 gap-7">
          <div>
            <Image
              src="/news-letter/picture.svg"
              alt="picture"
              width={350}
              height={350}
              className="lg:px-0 px-4"
            />
          </div>
          <div>
            <p className="text-xl font-monument-light lg:w-[550px]  lg:px-0 px-4">
              Send in a picture of your friend/colleague/frolleague so that we
              can put them in the spotlight in front of the whole world (or at
              least our tiny world).
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:gap-32 py-10">
          <div>
            <Image
              src="/news-letter/shreya.png"
              alt="picture"
              width={400}
              height={400}
              className="w-full h-full object-cover lg:px-0 px-3"
            />
          </div>
          <div>
            <Image
              src="/news-letter/rachel.png"
              alt="picture"
              width={800}
              height={800}
              className="w-full h-full object-cover lg:px-0 px-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureOfTheMonth;

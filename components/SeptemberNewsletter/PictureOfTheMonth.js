import Image from "next/image";
import React from "react";

const PictureOfTheMonth = () => {
  return (
    <>
      <div className="lg:py-5 container mx-auto">
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
        </div>
        <div className="flex items-center justify-center lg:gap-5 py-10 w-full">
          <div>
            <Image
              src="/sept-newsletter/kevin-1.png"
              alt="picture"
              width={800}
              height={800}
              className="w-full h-full object-cover lg:px-0 px-3"
            />
          </div>
          <div>
            <Image
              src="/sept-newsletter/kevin-2.png"
              alt="picture"
              width={800}
              height={800}
              className="w-full h-full object-cover lg:px-0 px-3"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-xl myriad-pro-light lg:px-0 px-4">
          Send in a picture of your friend/colleague/frolleague so that we can
          put them in the spotlight in front of the whole world (or at least our
          tiny world).
        </p>
      </div>
    </>
  );
};

export default PictureOfTheMonth;

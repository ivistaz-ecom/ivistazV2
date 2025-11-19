import Image from "next/image";
import React from "react";

const PictureOfTheMonth = () => {
  return (
    <>
      <div className=" container mx-auto">
        <div className="flex flex-col items-center justify-center gap-10">
          <div>
            <Image
              src="/oct-newsletter/picture.svg"
              alt="picture"
              width={800}
              height={800}
              className="lg:px-0 px-4"
            />
          </div>
          <div>
            <p className="text-center text-xl myriad-pro-semibold lg:px-0 px-4 w-2/3 mx-auto">
              Reminder: to have a Photo of the Month, we actually need… a photo.
              Hopefully we’ll have a real entry next month, or we’ll be forced
              to use a stock photo of peope shaking hands to prove we’re
              actually friendly around here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureOfTheMonth;

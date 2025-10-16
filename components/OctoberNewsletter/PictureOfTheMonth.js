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
          We asked for pics of your legendary coworkers and got… nothing. Don’t
          be shy, send us a snap of your frolleague so we can give them the fame
          (or mild embarrassment) they truly deserve!
        </p>
      </div>
        </div>
      </div>
     
    </>
  );
};

export default PictureOfTheMonth;

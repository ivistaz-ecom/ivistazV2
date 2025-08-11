import Image from "next/image";
import React from "react";

const MemeOfTheMonth = () => {
  return (
    <>
      <div className="lg:py-10 container mx-auto">
        <div className="flex items-center justify-center">
          <Image
            src="/news-letter/meme.svg"
            alt="meme"
            width={800}
            height={800}
            className="lg:px-0 px-4"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/news-letter/response.svg"
            alt="meme"
            width={600}
            height={600}
            className="py-10 lg:px-0 px-4"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/news-letter/wait.png"
            alt="meme"
            width={800}
            height={800}
            className="py-5 lg:py-10"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/news-letter/got-something.svg"
            alt="meme"
            width={800}
            height={800}
            className="lg:py-10 py-5 lg:px-0 px-4"
          />
          <div className="container flex items-center justify-center">
            <p className="lg:w-[500px] font-monument-light text-center lg:pb-0 pb-10">
              Send your contributions our way, we’re eager to brighten up the
              newsletter with your stories (and maybe a little rain-inspired
              fun).
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#E0091C] py-5">
        <p className="text-white text-center font-monument-light">
          Disclaimer: This newsletter is strictly for internal circulation.
        </p>
      </div>
    </>
  );
};

export default MemeOfTheMonth;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const MemeOfTheMonth = () => {
  return (
    <>
      <div className="lg:py-10 py-5 container mx-auto">
        <div className="flex items-center justify-center">
          <Image
            src="/sept-newsletter/meme.svg"
            alt="meme"
            width={800}
            height={800}
            className="lg:px-0 px-4"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/sept-newsletter/dev-design.png"
            alt="meme"
            width={600}
            height={600}
            className="lg:pt-20 pt-10 pb-10 lg:px-0 px-4"
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
            <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl lg:px-0 px-4 pb-5">
              In case you want to contribute to the newsletter with your
              think-pieces, trivia, fun facts, or suggestions, reach out to us!!
              We’re eagerly waiting for your suggestions!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#E0091C] py-5">
        <p className="text-white text-center font-monument-light">
          Disclaimer: This newsletter is strictly for internal circulation.
        </p>
      </div>
      <div className="bg-[#] py-5">
        <p className="text-black text-center font-monument-light">
          Read the August Newsletter{" "}
          <Link target="_blank" className="text-[#E0091C] underline" href="/newsletter">
            Here!
          </Link>
        </p>
      </div>
    </>
  );
};

export default MemeOfTheMonth;

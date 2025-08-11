import Image from "next/image";
import React from "react";
import Mic from "./Mic";

const ArtOfSaying = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Image
          src="/news-letter/art-of-saying.svg"
          alt="art-of-saying"
          width={800}
          height={800}
          className="object-cover p-10 lg:px-0 px-4"
        />
        <p className="text-center lg:w-[80%] font-monument-light text-lg lg:px-0 px-4">
          As part of Fridazed in July, Pick and Speak was conducted. Naturally,
          it was met with the usual enthusiasm <br className="hidden lg:block" /> (“Do we have to?”). But soon,
          people from even the quietest part of the office took to the stage
          with opinions, passion, and in one case, what felt like a campaign
          speech.
        </p>
      </div>
      <Mic />
    </>
  );
};

export default ArtOfSaying;

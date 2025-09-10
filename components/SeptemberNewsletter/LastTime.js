import Image from "next/image";
import React from "react";

const LastTime = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center lg:px-0 px-4">
        <div className="flex items-center justify-center lg:py-10">
          <p className="text-center lg:w-[80%] noteworthy-bold lg:text-[40px] text-2xl text-[#E0091C]">
            Last time, we joked about how boring July was. August clearly took
            it personally.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:gap-10 gap-5 items-center justify-center lg:py-10 py-5 lg:px-0 px-4">
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
          Two perfectly placed holidays made all the difference. August 15 gave
          us a long weekend to catch our breath (thank you, freedom!), and
          August 27 landed right in the middle of a busy week, offering a
          much-needed pause.
        </p>
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
          In between those breaks, things moved full speed ahead. Our design and
          dev teams dug into client work, working late, staying sharp, and
          “sharing feedback” just enough to keep the fun intact. The biryani
          definitely helped keep morale (and energy levels) high.
        </p>
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
          The last week of the month brought a bit of chaos (the fun kind). With
          some of our usual “office parents” away, most of us finally started
          pretending to be responsible, showing up on time, getting things done,
          and only taking a few coffee breaks.
        </p>
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl">
          And hey, since you made it this far, here’s something fun: we’ve
          hidden the word “website” somewhere in this month’s design. Find it
          and send it to us first, and you might just win a prize.
        </p>
      </div>
    </>
  );
};

export default LastTime;

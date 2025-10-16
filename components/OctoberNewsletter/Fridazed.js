import Image from "next/image";
import React from "react";

const Fridazed = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div>
          <Image
            src="/oct-newsletter/fridazed.png"
            alt="fridazed"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:py-10 py-5 gap-10">
          <p className="text-center text-[#E0091C] lg:text-6xl  lg:px-0 px-4 myriad-pro-semibold">
            Fridazed Fun
          </p>
          <p className="text-center  lg:text-2xl text-xl  lg:px-0 px-4 myriad-pro-light">
            The Nautilus team turned the office into a live Minute to Win It,
            with game after game, testing our nerves and skills. Some folks
            completely lost it trying to build towers that just wouldn’t stop
            tumbling, while others went all-in on sabotage (because who wants to
            play fair?). Before long, the whole office was bursting with
            giggles, chaos, and fun, reminding us all why we needed that break
            from pretending to be serious. Huge thanks to the Nautilus team, and
            specifically to the gamesmaster Sasritha, who kept saying, “Just one
            more game,” until we weren’t sure if we’d ever stop.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="lg:p-0 w-full">
          <Image
            src="/oct-newsletter/horror.png"
            alt="horror"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Fridazed;

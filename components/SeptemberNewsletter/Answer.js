import Image from "next/image";
import React from "react";

const Answer = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="lg:text-7xl text-2xl myriad-pro-semibold text-[#EC4415] lg:pt-10 py-5 text-center">
          The Answer to Last Month’s <br /> Burning Question
        </h2>
        <p className="text-center lg:w-[80%] text-[#092F87] myriad-pro-semibold lg:text-2xl text-xl lg:px-0 px-4">
          If iVistaz had a mascot, what would it be?
        </p>
        <p className="text-center lg:w-[80%] text-[#EC4415] myriad-pro-light lg:text-3xl text-xl lg:px-0 px-4 lg:py-10 pt-5">
          Meet the Capybara, the world’s chillest animal.
        </p>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/sept-newsletter/capy.png"
            alt="capybara"
            width={1200}
            height={1000}
            className="object-cover lg:px-0 px-4 w-full"
          />
        </div>
        <p className="text-center lg:w-[80%] myriad-pro-semibold lg:text-2xl text-xl lg:px-0 px-4 lg:pt-10 pt-5">
          It’s so effortlessly cool (like we pretend to be), it’s become an
          internet sensation. Capybaras adapt anywhere, make friends with
          everyone, and somehow stay totally unbothered, even when they’re
          swimming with crocodiles or hanging out with humans. And they never
          roll solo; their strength comes from strong, lasting partnerships.
        </p>
        <p className="myriad-pro-semibold lg:text-2xl text-xl lg:px-0 py-7">-Keerthivasan</p>
      </div>
    </>
  );
};

export default Answer;

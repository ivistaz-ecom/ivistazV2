import React from "react";

const FunnyQuotes = () => {
  const quotes = [
    <>
      <p className="font-monument-bold">
        She is competing for the <br className="hidden md:block" /> position of
        noodle maker <br className="hidden md:block" /> in the office
      </p>
    </>,
    <>
      <p className="font-monument-bold">
        She loves shawarma <br className="hidden md:block" /> too much
      </p>
    </>,
    <>
      <p className="font-monument-bold">
        She has a constant urge to hit KEERTHI{" "}
        <br className="hidden md:block" /> (Don’t we all)
      </p>
    </>,
    <>
      <p className="font-monument-bold">
        She looks like a <br className="hidden md:block" /> cinnamon roll, but{" "}
        <br className="hidden md:block" /> could kill you
      </p>
    </>,
  ];

  return (
    <div className="flex items-center justify-center p-6 bg-white lg:pb-24 pb-5">
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl lg:gap-20 gap-5">
        {/* Horizontal dashed line */}
        <div className="hidden md:block absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-gray-300"></div>
        {/* Vertical dashed line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 border-l-2 border-dashed border-gray-300"></div>

        {quotes.map((quote, index) => (
          <div
            key={index}
            className="bg-[#092F87] text-white font-monument-bold text-lg lg:text-3xl text-center p-6 h-[200px] flex items-center justify-center"
          >
            {quote}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunnyQuotes;

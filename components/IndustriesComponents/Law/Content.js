import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <h1 className="text-[40px] text-[#ff0000] uppercase font-monument-bold text-center lg:py-10 pt-5">
            Law
          </h1>
          <p className="text-center lg:text-lg font-monument-light lg:p-0 p-5">
            Digital discovery is now a key driver of client acquisition in legal
            services.
          </p>
          <div className="flex justify-center flex-col items-center lg:p-0 p-5">
            <p className="lg:py-10 lg:text-2xl text-center font-monument-bold lg:w-[90%]">
              The legal sector is witnessing a shift; potential clients now rely
              heavily on search engines, directories, and online reviews before
              reaching out to a firm. Whether it’s corporate law, IP,
              arbitration, or family law, digital presence directly influences
              credibility and conversion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

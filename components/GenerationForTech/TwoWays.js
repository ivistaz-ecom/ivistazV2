import React from "react";

const TwoWays = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Background Video */}
      <video
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      >
        <source
          src="/generation-for-tech/building-video.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay over video for darkening */}
      <div className="absolute inset-0 lg:bg-black/25"></div>

      {/* Centered Heading */}
      <div className="absolute lg:bottom-0 bottom-[750px] inset-0 flex justify-center items-center">
        <h4 className="text-white text-center text-3xl w-xl sm:text-3xl md:text-4xl lg:text-5xl p-3 lg:bg-black/0">
          Two Ways We Can Work
        </h4>
      </div>

      {/* Overlay Box */}
      <div className="lg:absolute -bottom-28 px-5 left-0 w-full flex flex-col md:flex-row z-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-r from-[#322596] to-[#8C1FBC] text-white px-8 md:px-10 py-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Support Your Own <br /> Brand Requirements
            </h2>
            <p className="text-sm md:text-xl font-monument-light mt-6">
              Most tech companies focus their best teams on client work—while
              their own digital presence lags behind. We help fix that.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10">
            <ul className="space-y-3 text-sm md:text-lg">
              <li className="wb-marker-red list-disc border-b-2 border-dashed pb-5">
                Revamp outdated websites and UX
              </li>
              <li className="wb-marker-red list-disc border-b-2 border-dashed pb-5">
                Improve lead capture and conversion rates
              </li>
              <li className="wb-marker-red list-disc">
                Bring your own brand experience up to the standard you deliver
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-r from-[#FFF0D5] to-[#FFE8E2] text-white px-8 md:px-10 py-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#430B60]">
              Act as Your B Team to <br /> Power Your Client Deliverables
            </h2>
            <p className="text-sm md:text-xl mt-6 font-monument-light text-black">
              We plug in as your remote delivery partner and act as your
              extended delivery team to help you meet client deadlines faster.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10">
            <ul className="space-y-3 text-sm md:text-lg">
              <li className="wb-marker-red list-disc border-b-2 border-dashed pb-5">
                UX/UI for mobile/web apps
              </li>
              <li className="wb-marker-red list-disc border-b-2 border-dashed pb-5">
                Front-end, CMS, and mobile development
              </li>
              <li className="wb-marker-red list-disc">
                Scalable support when internal teams are stretched
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoWays;

import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="bg-black text-white px-7 py-20 overflow-hidden w-full">
      <h2 className="text-center text-4xl md:text-5xl font-monument-light mb-16">
        What We Do
      </h2>

      {/* Lead Generation */}
      <div className="flex flex-col md:flex-row w-full relative mb-20">
        {/* gradient box */}
        <div className="w-full md:w-[60%] bg-gradient-to-r from-[#0043AF] to-[#3900BA] p-6 md:p-10 relative flex flex-col justify-center">
          {/* triangle pointer on the right */}
          <div
            className="absolute z-20 -right-7 top-1/2 transform -translate-y-1/2"
            style={{
              width: 0,
              height: 0,
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft: "30px solid #3900BA",
            }}
          />
          <h3 className="text-3xl md:text-5xl font-semibold mb-4">
            Lead Generation
          </h3>
          <p className="text-lg md:text-2xl mb-6 font-monument-light">
            We run multi-channel campaigns that bring in high-quality, <br className="hidden sm:block"/>
            sales-ready leads through:
          </p>
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/30 text-sm md:text-lg">
            <div className="py-3 md:py-0 md:pe-6 font-monument-light text-base/tight">
              Performance-driven <br /> paid media
            </div>
            <div className="py-3 md:py-0 md:px-6 font-monument-light text-base/tight">
              Precision <br /> outbound email
            </div>
            <div className="py-3 md:py-0 md:px-6 font-monument-light text-base/tight">
              Custom Account-Based <br /> Marketing (ABM) strategies
            </div>
          </div>
        </div>

        {/* image side */}
        <div className="w-full md:w-[40%] relative h-[300px] md:h-[350px]">
          <Image
            src="/generation-for-tech/what-we/lead-generation.png"
            alt="Lead Generation"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Digital Strategy */}
      <div className="flex flex-col-reverse md:flex-row w-full relative mt-20">
        {/* image side */}
        <div className="w-full md:w-[40%] relative h-[300px] md:h-[350px]">
          <Image
            src="/generation-for-tech/what-we/digital-strategy.png"
            alt="Digital Strategy"
            fill
            className="object-cover"
          />
        </div>

        {/* gradient box */}
        <div className="w-full md:w-[60%] bg-gradient-to-r from-[#009846] to-[#007584] p-6 md:p-10 relative flex flex-col justify-center">
          {/* triangle pointer on the left */}
          <div
            className="absolute -left-7 top-1/2 transform -translate-y-1/2"
            style={{
              width: 0,
              height: 0,
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderRight: "30px solid #009846",
            }}
          />
          <h3 className="text-3xl md:text-5xl font-semibold mb-4">
            Digital Strategy & Execution
          </h3>
          <p className="text-lg md:text-xl mb-6">
            We help elevate your brand and delivery capability with:
          </p>
          {/* cols section */}
          <div className="flex flex-col md:flex-row text-sm md:text-base divide-y md:divide-y-0 md:divide-x divide-white/30 text-left">
            <div className="py-3 md:py-0 md:pr-6 text-base/tight">Website redesigns</div>
            <div className="py-3 md:py-0 md:px-6 text-base/tight">
              Web and mobile app development
            </div>
            <div className="py-3 md:py-0 md:px-6 text-base/tight">UX/UI development</div>
            <div className="py-3 md:py-0 md:pl-6 text-base/tight">
              Conversion-driven content and Conversion Rate Optimization
              (CRO)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

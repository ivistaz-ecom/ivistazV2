import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-monument-light mb-16">
        What We Do
      </h2>

      {/* Lead Generation Section */}
      <div className="flex flex-col md:flex-row gap-0 mb-20">
        {/* Left: text box with clip */}
        <div className="flex-1 lg:relative">
          <div className="bg-gradient-to-r from-[#0043AF] to-[#3900BA] p-6 md:p-10 h-full clip-right flex flex-col justify-center">
            <h3 className="text-white text-3xl md:text-5xl font-semibold mb-4">
              Lead Generation
            </h3>
            <p className="text-lg md:text-xl mb-6">
              We run multi-channel campaigns that bring in high-quality,
              sales-ready leads through:
            </p>
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/30 text-sm md:text-base">
              <div className="py-3 md:py-0 md:pe-6">
                Performance-driven <br /> paid media
              </div>
              <div className="py-3 md:py-0 md:px-6">
                Precision <br /> outbound email
              </div>
              <div className="py-3 md:py-0 md:px-6">
                Custom Account-Based <br /> Marketing (ABM) strategies
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="flex-1 lg:relative">
          <Image
            src="/generation-for-tech/what-we/lead-generation.png"
            alt="Lead generation"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Digital Strategy & Execution Section */}
      <div className="flex flex-col-reverse md:flex-row gap-0 container mx-auto">
        {/* Left: image */}
        <div className="flex-1 lg:relative">
          <Image
            src="/generation-for-tech/what-we/digital-strategy.png"
            alt="Digital Strategy"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: text box with clip (mirror) */}
        <div className="flex-1 lg:relative">
          <div className="bg-gradient-to-r from-[#009846] to-[#007584] p-6 md:p-10 h-full clip-left flex flex-col justify-center">
            <h3 className="text-white text-3xl md:text-5xl font-semibold mb-4">
              Digital Strategy & Execution
            </h3>
            <p className="text-lg md:text-xl mb-6">
              We help elevate your brand and delivery capability with:
            </p>
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/30 text-sm md:text-base">
              <div className="py-3 md:py-0 md:pe-6">
                Website redesigns
              </div>
              <div className="py-3 md:py-0 md:px-6">
                Web and mobile app development
              </div>
              <div className="py-3 md:py-0 md:px-6">
                UX/UI development
              </div>
              <div className="py-3 md:py-0 md:px-6">
                Conversion-driven content and Conversion Rate Optimization (CRO)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

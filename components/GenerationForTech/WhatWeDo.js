import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      <h2 className="text-center text-4xl md:text-5xl font-monument-light mb-16">
        What We Do
      </h2>

      {/* Lead Generation Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start lg:mb-20 mb-10 container mx-auto">
        {/* Left Title */}
        <div className="flex-1">
          <h3 className="text-[#FF5C00] text-4xl md:text-6xl font-semibold leading-tight">
            Lead <br /> Generation
          </h3>
        </div>

        {/* Right Box */}
        <div className="flex-1 bg-gradient-to-r from-[#0043AF] to-[#3900BA] p-6 md:p-10">
          <p className="text-lg md:text-xl font-monument-light mb-6">
            We run multi-channel campaigns that bring in high-quality,
            sales-ready leads through:
          </p>
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/30">
            <div className="py-3 md:py-0 md:pe-6 text-sm md:text-base font-monument-light">
              Performance-driven <br /> paid media
            </div>
            <div className="py-3 md:py-0 md:px-6 text-sm md:text-base font-monument-light">
              Precision <br /> outbound email
            </div>
            <div className="py-3 md:py-0 md:px-6 text-sm md:text-base font-monument-light">
              Custom Account-Based <br /> Marketing (ABM) strategies
            </div>
          </div>
        </div>
      </div>

      {/* Digital Strategy & Execution Section */}
      <div className="flex flex-col-reverse md:flex-row gap-12 items-start container mx-auto">
        {/* Left Box */}
        <div className="flex-1 bg-gradient-to-r from-[#009846] to-[#007584] p-6 md:p-10">
          <p className="text-lg md:text-xl font-monument-light mb-6">
            We help elevate your brand and delivery capability with:
          </p>
          <div className="flex flex-col divide-y divide-white/30">
            <div className="flex flex-col md:flex-row md:divide-x divide-white/30 text-sm md:text-base py-3 md:py-0">
              <div className="md:pe-8 pb-3  font-monument-light">
                Website redesigns
              </div>
              <div className="md:px-6 pb-3 font-monument-light">
                Web and mobile app development
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:divide-x divide-white/30 text-sm md:text-base py-3 md:py-0">
              <div className="md:pe-6 py-3 md:pb-0 font-monument-light">
                UX/UI development
              </div>
              <div className="md:px-6 py-3 font-monument-light">
                Conversion-driven content and <br />
                Conversion Rate Optimization (CRO)
              </div>
            </div>
          </div>
        </div>

        {/* Right Title */}
        <div className="flex-1 justify-end flex items-center">
          <h3 className="text-[#FF5C00] text-4xl md:text-6xl font-semibold leading-tight">
            Digital <br /> Strategy & <br /> Execution
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

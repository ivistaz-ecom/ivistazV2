import Image from "next/image";
import React from "react";

const WhoWe = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0D285C] to-[#2F1F4A] text-white px-6 py-20">
        <div className="container mx-auto flex items-center lg:gap-52 gap-10 flex-col md:flex-row lg:px-20">
          <div>
            <h4 className="lg:text-6xl text-3xl">
              Who We
              <br /> Work With
            </h4>
          </div>
          <div>
            
              <div className="py-3 flex items-center justify-start gap-3"><Image src="/generation-for-tech/tick-orange.svg" width={30} height={30} alt="tick" /><p className="text-lg lg:text-xl">SaaS & Software Product Firms</p></div>
              <div className="py-3 flex items-center justify-start gap-3"><Image src="/generation-for-tech/tick-orange.svg" width={30} height={30} alt="tick" /><p className="text-lg lg:text-xl">Cloud, AI, and Cybersecurity Companies</p></div>
              <div className="py-3 flex items-center justify-start gap-3"><Image src="/generation-for-tech/tick-orange.svg" width={30} height={30} alt="tick" /><p className="text-lg lg:text-xl">Digital Transformation & IT Services Providers</p></div>
              <div className="py-3 flex items-center justify-start gap-3"><Image src="/generation-for-tech/tick-orange.svg" width={30} height={30} alt="tick" /><p className="text-lg lg:text-xl">UX, Mobility & Engineering Consultancies</p></div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWe;

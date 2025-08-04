import Image from "next/image";
import React from "react";

const WhyChooseUS = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0D285C] to-[#2F1F4A] text-white px-6 lg:py-28 py-10">
        <div className="container mx-auto flex items-center lg:gap-52 gap-10 flex-col md:flex-row lg:px-0">
          <div>
            <h4 className="lg:text-5xl text-3xl">
              Why <br className="hidden md:block" /> Choose Us
            </h4>
          </div>
          <div>
            <div className=" flex items-center justify-start gap-3">
              <Image
                src="/generation-for-tech/tick-orange.svg"
                width={30}
                height={30}
                alt="tick"
              />
              <p className="text-lg lg:text-xl font-monument-light">
                Strategy and execution across the full funnel: acquisition,
                conversion, and retention
              </p>
            </div>
            <div className="py-3 flex items-center justify-start gap-3">
              <Image
                src="/generation-for-tech/tick-orange.svg"
                width={30}
                height={30}
                alt="tick"
              />
              <p className="text-lg lg:text-xl font-monument-light">
                Deep understanding of growth levers like{" "}
                <b className="font-monument-bold">ROAS, AOV,</b> and{" "}
                <b className="font-monument-bold">CVR</b>
              </p>
            </div>
            <div className="py-3 flex items-center justify-start gap-3">
              <Image
                src="/generation-for-tech/tick-orange.svg"
                width={30}
                height={30}
                alt="tick"
              />
              <p className="text-lg lg:text-xl font-monument-light">
                Hands-on campaign management with consistent reporting
              </p>
            </div>
            <div className="py-3 flex items-center justify-start gap-3">
              <Image
                src="/generation-for-tech/tick-orange.svg"
                width={30}
                height={30}
                alt="tick"
              />
              <p className="text-lg lg:text-xl font-monument-light">
                Experience across categories including fashion, beauty, and
                consumer electronics
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUS;

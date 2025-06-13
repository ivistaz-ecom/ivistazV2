import { ShortContentData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShortContent = () => {
  return (
    <div className="lg:px-20 px-5 container mx-auto">
      <div>
        <h3 className="text-[#ed2023] text-[18px] font-monument-bold">
          Short content:
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 container mx-auto lg:pt-20 pt-5 gap-10">
        {ShortContentData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-5"
          >
            <Image src={item.logo} width={60} height={60} alt="icon" />
            <div>
              <p className="text-[18px] py-5 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-[#ed2023] text-[18px] font-monument-bold pt-5">
          Industry-specific content:
        </h3>
        <p className="pt-4 text-lg font-monument-light">
          We have helped businesses across a diverse range of industries, such
          as hi-tech, hospitality, not-for-profits, healthcare, real estate,
          aviation, home and kitchen appliances, and retail sectors, with their
          unique content needs.
        </p>
        <p className="text-[#ed2023] text-[18px] font-monument-bold pt-5 pb-10">
          What is your content requirement? <Link href='/contact-us' className="underline">Contact us</Link> today.
        </p>
      </div>
    </div>
  );
};

export default ShortContent;

import { LongFormData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LongForm = () => {
  return (
    <div className="lg:px-20 px-5 container mx-auto">
      <div>
        <h3 className="text-[#ed2023] text-[28px] font-monument-bold pt-7">
          Our content development expertise covers the following:
        </h3>
        <h3 className="text-[#ed2023] text-[18px] font-monument-bold pt-7">
          Long-form content:
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 container mx-auto lg:py-20 py-5 gap-10">
        {LongFormData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-5"
          >
            <Image src={item.logo} width={60} height={60} alt="icon" />
            <div>
              <p className="text-[18px] py-5 text-center">
                <Link href={item.pageLink} className="hover:text-[#ed2023]">
                  {item.description}
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LongForm;

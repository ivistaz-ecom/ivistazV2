import { TechnologyData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Technology = () => {
  return (
    <div>
      <div>
        <h3 className="text-[#ed2023] text-[24px] font-monument-bold py-10">
          Technology Proficiency:
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 container mx-auto lg:py-5 py-5 gap-10">
        {TechnologyData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-5"
          >
            <Image src={item.logo} width={100} height={100} alt="icon" />
            <div>
              <p className="text-[18px] py-5 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;

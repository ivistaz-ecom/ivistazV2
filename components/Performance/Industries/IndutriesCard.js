import { IndutriesCardData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const IndutriesCard = () => {
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-3 gap-8 lg:pt-20 pt-10 justify-center items-center">
          {IndutriesCardData.map((item, index) => (
            <div key={index} className="group">
              <div className="pb-2 overflow-hidden">
                <Image 
                  src={item.imgUrl} 
                  alt="icon" 
                  width={600} 
                  height={600}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-[800px]"
                />
              </div>
              <Link
                href={item.pageLink}
                className="group relative flex items-center gap-2 justify-between py-3 px-5 overflow-hidden transition-all duration-300 bg-gray-100 group-hover:border-l-0"
              >
                {/* Animated background */}
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-2 justify-between w-full">
                  <h4 className="text-[20px] font-monument-medium text-start text-black group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h4>
                  <FaChevronRight className="text-2xl text-black group-hover:text-white lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndutriesCard;

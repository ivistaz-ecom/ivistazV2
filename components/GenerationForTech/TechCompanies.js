"use client";
import { techCompaniesData } from "@/utils/TechCompaniesData";
import Image from "next/image";
import React from "react";

const TechCompanies = () => {
  return (
    <div className="bg-black">
      <h2 className="lg:text-5xl text-3xl font-bold text-white text-center lg:pt-48 py-10 lg:py-0 font-monument-light">
        Why{" "}
        <span className="text-[#FF5C00] font-monument-bold">
          Tech Companies
        </span>{" "}
        Choose Us
      </h2>

      <div className="container mx-auto lg:py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {techCompaniesData.map((card) => (
          <div
            key={card.id}
            className={`relative lg:w-[320px] h-[450px] overflow-hidden text-white group cursor-pointer bg-gradient-to-br ${card.gradient}`}
          >
            {/* Hover Image */}
            <div className="absolute top-0 left-0 w-full h-[50%] z-10 overflow-hidden">
              <div className="w-full h-full transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                <Image
                  src={card.hoverImage}
                  alt={card.title}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Icon (before hover) */}
            <div className="absolute top-0 left-0 w-full h-[30%] flex justify-center items-center lg:transition-opacity duration-500 ease-in-out lg:group-hover:opacity-0 opacity-100 z-20">
              <Image src={card.icon} alt="Icon" width={60} height={60} />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 w-full h-[50%] px-6 py-4 z-30 transition-transform duration-500 ease-in-out group-hover:translate-y-4">
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-md font-monument-light opacity-90">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCompanies;

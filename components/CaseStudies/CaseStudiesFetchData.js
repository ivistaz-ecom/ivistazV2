"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiCircleChevRight } from "react-icons/ci";
import { caseStudiesData } from "@/utils/CaseStudiesData";

const CaseStudiesFetchData = () => {
  return (
    <div className="w-full px-4 lg:px-0 mx-auto">
      <h1 className="lg:text-[88px] text-2xl font-monument-bold text-white">
        CASE STUDIES
      </h1>
      <h3 className="lg:text-[48px] text-lg text-white font-monument-bold pt-3 lg:pt-0">
        Performance you&apos;ll love. Can we replicate it for you?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
        {caseStudiesData.map((study) => (
          <div
            key={study.id}
            className="bg-white text-black rounded-3xl flex flex-col lg:h-[450px] p-5"
          >
            <div className="flex justify-between items-center p-4">
              <p className="lg:text-[56px] text-5xl text-red-600 font-monument-bold">
                {study.stats}
              </p>
              <Image
                src={study.image}
                alt="icons"
                width={60}
                height={60}
                className="lg:w-auto w-12 object-contain"
              />
            </div>
            <div className="flex flex-col flex-grow px-4">
              <p className="lg:text-2xl text-xl mb-5">{study.title}</p>
              <p className="lg:text-2xl text-xl">{study.description}</p>
            </div>
            <div className="px-4 py-6 mt-auto">
              <Link href={study.link} className="text-inherit">
                <button className="btn-16">{study.buttonText}</button>
              </Link>
            </div>
          </div>
        ))}

        {/* Dummy red card */}
        <Link href="/contact-us" className="text-inherit">
          <div className="bg-red-700 text-white rounded-3xl flex flex-col justify-center h-[450px] px-6 text-center">
            <p className="lg:text-[28px] text-xl font-medium">
              If you want this to be your digital success story, contact us here
            </p>
          </div>
        </Link>
      </div>

      {/* Mobile Responsive Adjustment */}
      <style jsx>{`
        @media (max-width: 768px) {
          .card {
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudiesFetchData;

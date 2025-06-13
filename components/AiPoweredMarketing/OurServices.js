"use client";
import { TechIndustryData } from "@/utils/OurServicesData";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-white px-4 py-6 md:px-12 md:pt-10 md:pb-20">
      {/* Mobile Title */}
      <p className="block md:hidden text-[2rem] font-monument-bold text-[#FF0000] text-center mb-4 uppercase">
        Our Services
      </p>

      {/* Mobile Tabs */}
      <div className="md:hidden flex flex-wrap gap-2 justify-start mb-6">
        {TechIndustryData.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-sm font-bold uppercase rounded 
              ${
                activeIndex === index
                  ? "bg-[#FF0000] text-white shadow-md"
                  : "bg-black text-white hover:bg-[#FF0000]"
              } 
              transition-all`}
          >
            {service.buttonText}
          </button>
        ))}
      </div>

      {/* Mobile Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden border border-[#FF0000] rounded-2xl shadow-md p-5"
        >
          {TechIndustryData[activeIndex].type === "basic" && (
            <>
              <h4 className="text-[#FF0000] text-xl font-bold">
                {TechIndustryData[activeIndex].contentTitle}
              </h4>
              <h5 className="font-semibold mt-3">
                {TechIndustryData[activeIndex].subtitle}
              </h5>
              <p className="mt-3">
                {TechIndustryData[activeIndex].description1}
              </p>
              <p>{TechIndustryData[activeIndex].description2}</p>
              <ul className="list-disc ml-5 mt-3 space-y-1">
                {TechIndustryData[activeIndex].points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </>
          )}
          {TechIndustryData[activeIndex].type === "aiSeo" && (
            <>
              <h4 className="text-[#FF0000] text-xl font-bold">
                {TechIndustryData[activeIndex].highlightTitle}
              </h4>
              <h5 className="mt-3">{TechIndustryData[activeIndex].mainText}</h5>
              <p className="text-[#FF0000] mt-2">
                {TechIndustryData[activeIndex].highlightNote}
              </p>
              <div className="mt-4 space-y-4">
                {TechIndustryData[activeIndex].features.map((feature, idx) => (
                  <div key={idx}>
                    <h6 className="text-[#FF0000] font-semibold">
                      {feature.heading}
                    </h6>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-wrap justify-center items-start gap-3">
        {/* Title */}
        <p className="writing-mode-vertical text-[#FF0000] font-monument-bold text-[48px] rotate-180 uppercase h-[400px] w-[100px] flex items-center justify-start">
          Our Services
        </p>

        {/* Tabs Before Active */}
        {TechIndustryData.map((service, index) =>
          index < activeIndex ? (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="writing-mode-vertical pt-5 font-monument-bold rotate-180 w-[50px] h-[500px] text-white bg-black hover:bg-[#FF0000] text-[19px] uppercase rounded-2xl flex justify-start items-center text-center transition-all"
            >
              {service.buttonText}
            </button>
          ) : null
        )}

        {/* Active Tab */}
        <button className="writing-mode-vertical pt-5 font-monument-bold rotate-180 w-[50px] h-[500px] bg-[#FF0000] text-white text-[19px] uppercase rounded-2xl flex justify-start items-center text-center shadow-lg">
          {TechIndustryData[activeIndex].buttonText}
        </button>

        {/* Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="border border-[#FF0000] rounded-2xl shadow-md h-[500px] min-w-[500px] max-w-[800px] p-6 overflow-auto"
          >
            {TechIndustryData[activeIndex].type === "basic" && (
              <>
                <h4 className="text-[#FF0000] text-[40px] font-monument-bold">
                  {TechIndustryData[activeIndex].contentTitle}
                </h4>
                <h5 className="font-semibold mt-3 text-xl font-monument-bold">
                  {TechIndustryData[activeIndex].subtitle}
                </h5>
                <p className="mt-3">
                  {TechIndustryData[activeIndex].description1}
                </p>
                <p>{TechIndustryData[activeIndex].description2}</p>
                <ul className="list-disc ml-5 mt-3 space-y-1">
                  {TechIndustryData[activeIndex].points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {TechIndustryData[activeIndex].type === "aiSeo" &&
              Array.isArray(TechIndustryData[activeIndex].features) && (
                <>
                  <h4 className="text-[#FF0000] text-[40px] font-monument-bold">
                    {TechIndustryData[activeIndex].highlightTitle}
                  </h4>
                  <h5 className="mt-3 text-xl">
                    {TechIndustryData[activeIndex].mainText}
                  </h5>
                  <p className="text-[#FF0000] py-2 font-monument-bold">
                    {TechIndustryData[activeIndex].highlightNote}
                  </p>
                  <div className="flex flex-wrap">
                    {TechIndustryData[activeIndex].features.map(
                      (feature, idx) => {
                        const isLast =
                          idx ===
                          TechIndustryData[activeIndex].features.length - 1;
                        return (
                          <div
                            key={idx}
                            className={`w-1/4 px-3 mb-4 ${
                              !isLast
                                ? "border-r-2 border-dotted border-[#FF0000]"
                                : ""
                            }`}
                          >
                            <h6 className="text-[#FF0000] font-monument-bold pb-2">
                              {feature.heading}
                            </h6>
                            <p>{feature.text}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </>
              )}
          </motion.div>
        </AnimatePresence>

        {/* Tabs After Active */}
        {TechIndustryData.map((service, index) =>
          index > activeIndex ? (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="writing-mode-vertical pt-5 font-monFument-bold rotate-180 w-[50px] h-[500px] text-white bg-black hover:bg-[#FF0000] text-[19px] font-bold uppercase rounded-2xl flex justify-start items-center text-center transition duration-300"
            >
              {service.buttonText}
            </button>
          ) : null
        )}
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-in-out;
        }

        .writing-mode-vertical {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default OurServices;

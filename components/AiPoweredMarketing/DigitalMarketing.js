"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const contentData = {
  MQLs: `Marketing Qualified Leads (MQLs) are no longer just about downloads and form fills. Using AI-powered insights, we track real-time buyer intent, behaviour patterns, and engagement signals to qualify leads with precision. This ensures your sales team connects with prospects who are not only interested but ready to decide—faster and more effectively.`,
  CONTENT: `Our content strategies are tailored for the GenAI era—hyper-personalized, data-driven, and optimized for every stage of the buyer’s journey. From blogs to videos, we craft assets that drive engagement and action.`,
  SEO: `Leverage GenAI to supercharge your SEO. We blend traditional keyword strategies with AI-driven insights to help your business rank faster and smarter.`,
  WEBSITE: `Transform your website into a high-converting, intelligent experience. With GenAI, we personalize experiences in real time, increasing engagement and driving conversions.`,
};

const DigitalMarketing = () => {
  const [selected, setSelected] = useState("MQLs");
  const [showFront, setShowFront] = useState(true);

  const handleButtonClick = (key) => {
    if (key !== selected) {
      setTimeout(() => {
        setSelected(key);
        setShowFront((prev) => !prev);
      }, 50);
    }
  };

  return (
    <>
      <style>{`
        .flip-box {
          perspective: 1000px;
        }
        .flip-box-front,
        .flip-box-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: #fff;
          padding: 2rem;
          border: 1px solid #dc3545;
          border-radius: 1rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
        .flip-box-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="relative py-10 bg-white z-[1]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[#FF0000] text-center font-monument-bold uppercase mb-3 text-2xl lg:text-[4rem] leading-tight">
            Digital Marketing <br /> For the GenAI Era
          </h2>
          <p className="text-center font-monument-light mb-4 lg:mb-10">
            Helping you to transition from informing prospects to shaping
            decisions in real-time
          </p>
        </div>

        <div className="relative h-[700px]">
          <Image
            src="/ai-power/digital_marketing_bg_img.webp"
            alt="Background"
            fill
            priority
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[1]" />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[2] px-4">
            <div className="flex flex-col lg:flex-row container mx-auto  justify-center items-center">
              {/* Left Buttons */}
              <div className="w-full lg:w-1/3 space-y-4">
                {Object.keys(contentData).map((key) => (
                  <button
                    key={key}
                    className={`text-2xl w-full flex justify-center items-center font-monument-bold rounded-xl py-5 my-5 px-4 border transition ${
                      selected === key
                        ? "bg-[#FF0000] text-white border-[#FF0000]"
                        : "bg-white text-[#FF0000] border-[#FF0000] hover:bg-[#FF0000] hover:text-white"
                    }`}
                    onClick={() => handleButtonClick(key)}
                  >
                    {key}
                    <FaArrowCircleRight className="ml-auto text-xl" />
                  </button>
                ))}
              </div>

              {/* Right Flip Box */}
              <div className="w-full lg:w-1/2 mx-auto">
                <div className="flip-box" style={{ height: "300px" }}>
                  <motion.div
                    className="flip-box-inner"
                    animate={{ rotateY: showFront ? 0 : 180 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      transformStyle: "preserve-3d",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="flip-box-front flex items-center justify-center">
                      <p className="text-start text-black">
                        {showFront ? contentData[selected] : ""}
                      </p>
                    </div>
                    <div className="flip-box-back flex items-center justify-center">
                      <p className="text-start text-black">
                        {!showFront ? contentData[selected] : ""}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;

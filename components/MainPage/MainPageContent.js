"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HomePage = () => {
  const [showSecondSection, setShowSecondSection] = useState(true); // Default to true
  const secondSectionRef = useRef(null);

  return (
    <>
      {/* Fixed logo and skip button */}
      <div className="fixed lg:top-32 top-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center">
        <Image
          src="/ivista_logo.svg"
          width={300}
          height={80}
          alt="IVISTAZ Logo"
        />
      </div>
      <Link
        href="/welcome"
        className="fixed top-6 right-6 md:right-10 bg-white text-black py-2 px-3 text-sm font-medium font-[monument] rounded-md hover:shadow-md z-50"
      >
        Skip
      </Link>

      {/* Second section */}
      <div
        className={`iv-bg min-h-screen fixed top-0 left-0 w-full z-30 overflow-y-auto ${
          showSecondSection ? "block" : "hidden"
        }`}
        ref={secondSectionRef}
      >
        <div className="flex flex-col items-center justify-between min-h-screen lg:pt-[250px] pt-[50px] pb-10">
          <div className="flex flex-col justify-center items-center mt-20 md:mt-0">
            <h2 className="text-white text-3xl md:text-[60px] font-monument-bold pb-3">
              WHAT DOES
            </h2>
            <div className="text">
              <span>P</span>
              <span>E</span>
              <span>R</span>
              <span>F</span>
              <span>O</span>
              <span>R</span>
              <span>M</span>
              <span>A</span>
              <span>N</span>
              <span>C</span>
              <span>E</span>
            </div>
            <h2 className="text-white text-3xl md:text-[60px] font-monument-bold pt-3">
              MEAN TO YOU?
            </h2>
          </div>

          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-end gap-3 w-full lg:pt-0 pt-4">
              {[
                {
                  href: "/sales",
                  src: "/mainpage/online_sale.svg",
                  text: "Online Sales",
                },
                { href: "/leads", src: "/mainpage/leads.svg", text: "Leads" },
                {
                  href: "/traffic",
                  src: "/mainpage/traffic.svg",
                  text: "Traffic",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link
                    href={item.href}
                    className="btn h-btn blurb-ripple-out flex items-center gap-2 justify-start lg:justify-center w-3/4 overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt={item.text}
                      width={30}
                      height={30}
                    />
                    <span>{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 lg:pt-6 pt-3 w-full">
              {[
                {
                  href: "/keyword-ranking",
                  src: "/mainpage/keyword.svg",
                  text: "Keyword Ranking",
                },
                {
                  href: "/engagement",
                  src: "/mainpage/engagement.svg",
                  text: "Engagement",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.1 * (idx + 0.5),
                  }}
                >
                  <Link
                    href={item.href}
                    className="btn h1-btn blurb-ripple-out flex items-center gap-2 justify-start lg:justify-center w-3/4 overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt={item.text}
                      width={30}
                      height={30}
                    />
                    <span className="text-center">{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .text {
          font-size: clamp(20px, 4vw, 4rem);
          letter-spacing: 5px;
          font-weight: 700 !important;
          color: #fff;
        }
        .text span {
          display: inline-block;
          animation: pop 0.4s ease-in-out;
          font-size: 70px !important;
        }
        .text span:nth-child(1) { animation-delay: 0.1s; }
        .text span:nth-child(2) { animation-delay: 0.2s; }
        .text span:nth-child(3) { animation-delay: 0.3s; }
        .text span:nth-child(4) { animation-delay: 0.4s; }
        .text span:nth-child(5) { animation-delay: 0.5s; }
        .text span:nth-child(6) { animation-delay: 0.6s; }
        .text span:nth-child(7) { animation-delay: 0.7s; }
        .text span:nth-child(8) { animation-delay: 0.8s; }
        .text span:nth-child(9) { animation-delay: 0.9s; }
        .text span:nth-child(10) { animation-delay: 1s; }
        .text span:nth-child(11) { animation-delay: 1.1s; }

        @keyframes pop {
          0% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .iv-bg {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 767px) {
          .text span {
            display: inline-block;
            animation: pop 0.4s ease-in-out;
            font-size: 25px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;

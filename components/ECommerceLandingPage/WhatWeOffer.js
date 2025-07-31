import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel/Carousel";

const WhatWeOffer = () => {
  return (
    <div className="bg-black text-white pt-10 overflow-hidden w-full">
      <h2 className="text-center text-4xl md:text-5xl font-monument-light lg:mb-16 mb-7">
        What We <span className="text-[#EA561F]"> Offer</span>
      </h2>

      {/* Customer */}
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="bg-gradient-to-r from-[#3732B4] via-[#3732B4] to-[#8240BA] lg:w-[50%] flex items-start flex-col justify-center lg:p-15 p-5">
          <h3 className="text-2xl md:text-5xl font-semibold lg:mb-7 mb-5 lg:leading-13">
            Customer Acquisition, <br /> Built for E-Commerce
          </h3>
          <p className="text-md md:text-xl font-monument-light">
            Paid campaigns tailored to your margins, funnels, and product
            categories. We focus on reducing your <b className="font-monument-bold">customer acquisition cost
            (CAC), optimizing the cost per purchase (CPP),</b> and <b className="font-monument-bold">increasing your
            click-through rate (CTR).</b>
          </p>
        </div>
        <div className=" lg:w-[50%]">
          <Image
            alt="customer"
            src="/e-commerce/img-customer.webp"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>

      {/* Conversation */}
      <div className="flex lg:flex-row flex-col py-13">
        <div className=" lg:w-[50%]">
          <Image
            alt="customer"
            src="/e-commerce/conversion.webp"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="bg-gradient-to-r from-[#1484A5] via-[#0B9D70] to-[#0B9D70] lg:w-[50%] flex items-start flex-col justify-center lg:p-15 p-5">
          <h3 className="text-2xl md:text-5xl font-semibold lg:mb-7 mb-5 lg:leading-13">
            Conversion Optimization <br /> That Lifts Revenue
          </h3>
          <p className="text-md md:text-xl font-monument-light">
            We fine-tune the path from click to checkout. From landing pages to
            creatives, we optimize every touchpoint to improve{" "}
            <b className="font-monument-bold">conversion rate (CVR)</b> and <b className="font-monument-bold">average order value (AOV).</b>
          </p>
        </div>
      </div>
      {/* Retention */}
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="bg-gradient-to-r from-[#C7501B] via-[#C7501B] to-[#D96A8C] lg:w-[50%] flex items-start flex-col justify-center lg:p-15 p-5">
          <h3 className="text-2xl md:text-5xl font-semibold lg:mb-7 mb-5 lg:leading-13">
            Retention Campaigns <br className="hidden lg:block" /> That Drive
            Repeat Business
          </h3>
          <p className="text-md md:text-xl font-monument-light">
            We build email journeys, SMS flows, and remarketing strategies that
            improve repeat purchase rate, lift{" "}
            <b className="font-monument-bold">customer lifetime value (CLV),</b>{" "}
            and reduce cart abandonment rates.
          </p>
        </div>
        <div className=" lg:w-[50%]">
          <Image
            alt="customer"
            src="/e-commerce/img-retention.webp"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <h3 className="lg:text-[60px] text-2xl text-center font-monument-light pt-10 text-[#DBDBDB]">
          End-to-end{" "}
          <span className="text-[#EA561F]"> E-commerce Services</span>
        </h3>
        <h3 className="lg:text-[60px] text-2xl text-center font-monument-light text-[#DBDBDB]">
          for Your Brand
        </h3>
        {/* <div className="pt-10">
       <Link href="/ai-powered-marketing" className="bg-white text-black rounded-lg p-2 h-12 w-48 flex items-center justify-center text-lg font-semibold hover:bg-gray-200 transition duration-300">
          Explore Solutions
        </Link>
       </div> */}
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default WhatWeOffer;

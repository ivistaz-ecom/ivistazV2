import Image from "next/image";
import Link from "next/link";
import React from "react";
import IndutriesCard from "./IndutriesCard";

const Content = () => {
  return (
    <>
      <div className="pt-5">
        <div className="bg-white rounded-4xl lg:p-10 p-5 text-center">
          <h2 className="lg:text-[60px] text-4xl text-[#000] uppercase">
          Industries
          </h2>
          <p className="font-monument-light lg:text-lg pt-3">
            Client expectations have taken a quantum leap, compelling
            individuals to adapt like never before. Brands have relentlessly
            pursued growth by embracing innovative solutions in Ecommerce
            development & growth strategies. That’s where we step in. With a
            passion for creating exceptional experiences and staying ahead of
            the curve, we’ve mastered our art. And today, we don’t just perform,
            we outperform.
          </p>
          <div>
            <IndutriesCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

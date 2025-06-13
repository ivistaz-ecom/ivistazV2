import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <>
      <div className="pt-5">
        <div className="bg-white rounded-2xl lg:p-10 p-5">
          <h2 className="text-[48px] text-[#ed2225] font-monument-bold">
            About Us
          </h2>
          <p className="font-monument-light lg:text-lg pt-3">
            We started young. We knew that the digital age was dawning at a time
            when marketing was mostly mainline/offline and kept a sharp eye on
            the digital landscape, which was accelerating at an unprecedented
            pace. Starting with organic search and social, and then moving on to
            paid search and social marketing, we quickly learned what businesses
            needed to thrive. And in response, we created a strong bouquet of
            end-to-end digital services, including web development and UX/UI.
            Today, backed by years of mastery in the digital and e-commerce
            space, iVistaz is helping to make the online channel a viable source
            for improved awareness, engagement, leads and revenues for
            businesses in the B2B and B2C sectors.
          </p>
          <div>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

"use client";

import React from "react";
import ECommerceLandingPage from "../../components/ECommerceLandingPage";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title:
      "B2B Lead Generation for Tech Brands | Scalable & Targeted Campaigns",
    description:
      "Discover tailored B2B lead generation solutions designed for tech companies. From qualified lead capture to multi-channel outreach, we help you connect with decision-makers and grow your pipeline with measurable ROI. Explore how we combine strategy, content, and digital execution to drive results for your tech brand.",
    path: pathname,
    // metaImage: `${domainName}`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="">
        <div>
          <ECommerceLandingPage />
        </div>
      </div>
    </>
  );
};

export default page;

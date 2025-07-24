"use client";
import React from "react";
import Education from "../../../components/IndustriesComponents/Education";
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
      "Performance Marketing Solutions for Educational Institutions | iVistaz",
    description:
      "Enhance student and faculty enrollment with iVistaz’s specialized digital strategies for education. We help institutions increase visibility with SEO for educational institutions, drive leads through high-intent student recruitment campaigns, and create mobile-friendly websites with compelling content. Our structured retargeting, organic social media presence, and data-backed reporting support long-term credibility and growth.",
    path: pathname,
    metaImage: `${domainName}/industries/appliances-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="bg-white flex flex-col justify-between">
        <Education />
      </div>
    </>
  );
};

export default page;

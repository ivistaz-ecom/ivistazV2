'use client';

import React from "react";
import CaseStudies from "../../components/CaseStudies";
import NextSeo from "@/components/Seo/Seo";
import { usePathname } from "next/navigation";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Success Stories & Case Studies",
    description:
      "Explore our success stories and case studies to see how iVistaz has helped businesses achieve their marketing goals. Learn from our proven strategies and discover how we can drive success for your brand.",
    path: pathname,
    metaImage: `${domainName}/industries/tech-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="bg-black py-24 border-b-2 border-[#2D2D2D] border-dashed">
        <div className="container mx-auto">
          <CaseStudies />
        </div>
      </div>
    </>
  );
};

export default page;

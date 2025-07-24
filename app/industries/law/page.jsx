"use client";
import React from "react";
import Law from "../../../components/IndustriesComponents/Law";
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
      "Digital Marketing for Law Firms  | iVistaz",
    description:
      "iVistaz empowers legal firms with strategic digital marketing for law practices, enhancing discovery and conversion. From SEO for legal services and local listings to content-driven trust building and high-conversion landing pages, we offer tailored solutions that boost online presence, authority, and client acquisition. Drive engagement with impactful content and maintain credibility with optimized websites.",
    path: pathname,
    metaImage: `${domainName}/industries/appliances-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="bg-white flex flex-col justify-between">
        <Law />
      </div>
    </>
  );
};

export default page;

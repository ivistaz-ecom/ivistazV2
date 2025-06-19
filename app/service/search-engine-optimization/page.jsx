"use client";
import React from "react";
import SearchEngineOptimization from "../../../components/ServiceComponents/SearchEngineOptimization";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const seoData = {
    title:
      "Maximize Your Online Visibility with Expert SEO Services by iVistaz",
    description:
      "Boost online visibility with expert SEO by iVistaz. Navigate dynamic SEO landscape, elevate digital presence, track progress.",
    path: pathname,
    metaImage: `${domainName}/services/seo-banner.jpg`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <SearchEngineOptimization />
    </>
  );
};

export default page;

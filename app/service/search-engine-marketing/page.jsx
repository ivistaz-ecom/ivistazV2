"use client";
import React from "react";
import SearchEngineComponents from "../../../components/ServiceComponents/SearchEngineMarketing";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const seoData = {
    title: "Expert SEM Strategies for Effective Online Advertising",
    description:
      "Navigate micro-moments with expert SEM. Place ads at the top of SERPs, optimize CPL, and drive conversions with search, display, video, shopping, and discovery ads.",
    path: pathname,
    metaImage: `${domainName}/services/sem-banner.jpg`,
  };
  return (
    <>
      <NextSeo {...seoData} />
      <SearchEngineComponents />
    </>
  );
};

export default page;

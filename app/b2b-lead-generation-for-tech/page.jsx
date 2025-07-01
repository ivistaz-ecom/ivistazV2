'use client';

import React from "react";
import GenerationForTech from "../../components/GenerationForTech"
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Join the iVistaz Team",
    description:
      "Looking for a dynamic career in digital marketing? Join the iVistaz team and be part of an innovative company dedicated to driving success for our clients. Explore our career opportunities today.",
    path: pathname,
    // metaImage: `${domainName}`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="">
        <div>
          <GenerationForTech />
        </div>
      </div>
    </>
  );
};

export default page;

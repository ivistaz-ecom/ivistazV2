'use client';

import React from "react";
import Hospitality from "../../../components/IndustriesComponents/Hospitality";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Enhancing digital experience for customers in hospitality sector",
    description:
      "Leveraging twelve years of expertise with digital marketing in the hospitality sector, iVistaz ensures content is fine-tuned to customer expectations.",
    path: pathname,
    metaImage: `${domainName}/industries/hospitality-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <Hospitality />
      </div>
    </>
  );
};

export default page;

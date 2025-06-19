"use client";

import React from "react";
import BeautyAndWellness from "../../../components/IndustriesComponents/BeautyAndWellness";
import NextSeo from "@/components/Seo/Seo";
import { usePathname } from "next/navigation";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title:
      "Digital Marketing Solutions for Beauty and Wellness Brands | Increase Online Sales & Market Reach",
    description:
      "Unlock the potential of your beauty and wellness brand with our tailored digital marketing services. From optimizing search visibility to driving online sales and engaging with your audience on social media, we help your brand stand out in the crowded market.",
    path: pathname,
    metaImage: `${domainName}/industries/beauty-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <BeautyAndWellness />
      </div>
    </>
  );
};

export default page;

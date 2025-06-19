"use client";

import React from "react";
import Jewellery from "../../../components/IndustriesComponents/Jewellery";
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
      "Boost Online Sales for Jewelry Brands | Expert Digital Marketing Solutions",
    description:
      "Enhance your jewelry brand's online presence and drive sales with our specialized digital marketing services. From SEO and social media marketing to personalized online experiences, we help jewelry brands connect with their audience and increase conversions both in-store and online.",
    path: pathname,
    metaImage: `${domainName}/industries/jewellery.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <Jewellery />
      </div>
    </>
  );
};

export default page;

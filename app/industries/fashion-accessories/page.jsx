"use client";

import React from "react";
import FashionAccessories from "../../../components/IndustriesComponents/FashionAccessories";
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
      "Digital Marketing Solutions for Fashion Brands | Increase Online Sales & Social Engagement",
    description:
      "Unlock the potential of your fashion brand with our tailored digital marketing services. From increasing online sales for fashion accessories to enhancing social media engagement, we help bridge the gap between online visitors and sales while creating curated online experiences to strengthen brand loyalty. Discover how our expertise can elevate your brand's online presence and drive growth in the dynamic fashion industry.",
    path: pathname,
    metaImage: `${domainName}/industries/fashion-access.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <FashionAccessories />
      </div>
    </>
  );
};

export default page;

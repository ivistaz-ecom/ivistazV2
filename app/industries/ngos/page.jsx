"use client";

import React from "react";
import Ngos from "../../../components/IndustriesComponents/Ngos";
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
      "Digital Marketing Solutions for Nonprofit Organizations | SEO, Social Media & Web Design",
    description:
      "Maximize your nonprofit's impact with our comprehensive digital marketing services. From SEO and social media marketing to web design, we help NGOs and nonprofit organizations reach their audience and drive meaningful engagement.",
    path: pathname,
    metaImage: `${domainName}/industries/profit-ngos.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <Ngos />
      </div>
    </>
  );
};

export default page;

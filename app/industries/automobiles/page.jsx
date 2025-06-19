"use client";

import React from "react";
import Automobiles from "../../../components/IndustriesComponents/Automobiles";
import NextSeo from "@/components/Seo/Seo";
import { usePathname } from "next/navigation";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Strengthening market share in Indian Automobile Industry",
    description:
      "As India sees transformative growth at global levels for the automobile industry, digital marketing services are imperative to grow brand networks.",
    path: pathname,
    metaImage: `${domainName}/industries/auto-mobiles-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <Automobiles />
      </div>
    </>
  );
};

export default page;

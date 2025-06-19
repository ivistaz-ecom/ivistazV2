"use client";

import React from "react";
import PerformanceComponents from "../../components/Performance";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();

  const seoData = {
    title: "Performance Marketing Excellence",
    description:
      "Experience performance marketing excellence with iVistaz. Our data-driven strategies and innovative solutions ensure your marketing campaigns deliver maximum ROI and drive business growth.",
    path: `${pathname}`,
    metaImage: "",
  };
  return (
    <>
      <NextSeo {...seoData} />
      <div className="iv-bg  flex flex-col justify-between pt-24 border-b-2 border-dashed border-[#2D2D2D] min-h-screen">
        <div className="container mx-auto lg:px-0 px-4">
          <PerformanceComponents />
        </div>
      </div>
    </>
  );
};

export default page;

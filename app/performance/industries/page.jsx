"use client";
import React from "react";
import IndustriesComponents from "../../../components/Performance/Industries";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();

  const seoData = {
    title: "Digital marketing services across industries",
    description:
      "By embracing innovative solutions and a passion for creating exceptional performances, iVistaz delivers expert digital marketing services for various industries.",
    path: `${pathname}`,
    metaImage: "",
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="flex flex-col justify-between pt-24">
        <div className="container mx-auto lg:px-0 px-4">
          <IndustriesComponents />
        </div>
      </div>
    </>
  );
};

export default page;

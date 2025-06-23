"use client";
import React from "react";
import MasteryAboutUs from "../../../components/Mastery/AboutUs";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "About iVistaz",
    description:
      "Learn more about iVistaz, a leading digital marketing agency committed to delivering exceptional results. Our team of experts specializes in performance marketing, branding, web development, and more.",
    path: pathname,
    // metaImage: `${domainName}`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="bg-black flex flex-col justify-between min-h-screen pt-24 border-b-2 border-dashed border-[#2D2D2D]">
        <div className="container mx-auto lg:px-0 px-4">
          <MasteryAboutUs />
        </div>
      </div>
    </>
  );
};

export default page;

"use client";
import React from "react";
import HomeComponents from "../../components/HomeComponents";
import NextSeo from "@/components/Seo/Seo";
import { usePathname } from "next/navigation";
const page = () => {
  const pathname = usePathname();
  // Use the pathname to set the canonical URL
  // Assuming you want to use the base URL for canonical links
  const seoData = {
    title: "Welcome to Our Home Page",
    description: "Discover our innovative solutions and services.",
    path: `${pathname}`,
  };
  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <HomeComponents />
      </div>
    </>
  );
};

export default page;

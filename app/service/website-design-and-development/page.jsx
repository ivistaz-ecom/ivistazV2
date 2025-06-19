"use client";
import React from "react";
import WebDesignAndDevelopment from "../../../components/ServiceComponents/WebDesignAndDevelopment";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const seoData = {
    title:
      "Crafting Digital Excellence: Mastery, Art, and Performance in Digital Marketing",
    description:
      "Explore the expertise of iVistaz, a digital marketing agency mastering the intricacies of performance marketing, crafting captivating digital art, and delivering unforgettable digital journeys with precision and excellence.",
    path: pathname,
    metaImage: `${domainName}/services/web-banner.jpg`, // Fixed typo in 'srvices'
  };
  return (
    <>
      <NextSeo {...seoData} />
      <WebDesignAndDevelopment />
    </>
  );
};

export default page;

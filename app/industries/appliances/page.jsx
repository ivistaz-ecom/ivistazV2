"use client";
import React from "react";
import Appliances from "../../../components/IndustriesComponents/Appliances";
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
      "Increase Online Sales for Home Appliances | Expert Digital Marketing for Appliance Brands",
    description:
      "Boost your appliance brand's online sales with our specialised digital marketing strategies. Capitalise on the growing market and enhance your brand's visibility and engagement on e-stores and marketplaces. Discover how we can help you succeed in the rapidly evolving appliances industry.",
    path: pathname,
    metaImage: `${domainName}/industries/appliances-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="bg-white flex flex-col justify-between">
        <Appliances />
      </div>
    </>
  );
};

export default page;

"use client";
import React from "react";
import SocialMediaMarketing from "../../../components/ServiceComponents/SocialMediaMarketing";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();
  const seoData = {
    title: "Social media marketing to boost your brand online",
    description:
      "Discover iVistaz comprehensive social media marketing services for businesses in both B2B and B2C sectors.",
    path: pathname,
    metaImage: "/services/smm-banner.jpg",
  };

  return (
    <>
      <NextSeo {...seoData} />
      <SocialMediaMarketing />
    </>
  );
};

export default page;

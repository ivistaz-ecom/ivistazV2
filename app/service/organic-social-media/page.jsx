"use client";
import React from "react";
import SocialMediaOrganic from "../../../components/ServiceComponents/SocialMediaOrganic";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();
  const seoData = {
    title: "Cultivate Brand Loyalty with Organic Social Media Marketing.",
    description:
      "Humanize your brand with authentic interactions. Our comprehensive Social Media Management services ensure measurable metrics and impactful engagement.",
    path: pathname,
    metaImage: "/services/social-media-organic-banner.jpg",
  };

  return (
    <>
      <NextSeo {...seoData} />
      <SocialMediaOrganic />
    </>
  );
};

export default page;

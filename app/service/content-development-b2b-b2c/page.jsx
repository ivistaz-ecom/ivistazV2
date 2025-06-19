"use client";

import React from "react";
import ContentDevelopment from "../../../components/ServiceComponents/ContentDevelopment";
import NextSeo from "@/components/Seo/Seo";
import { usePathname } from "next/navigation";
const page = () => {
  const pathname = usePathname();
  const seoData = {
    title: "Content development for B2C and B2B businesses",
    description:
      "iVistaz provides content development services for organisations across B2B and B2C sectors, going beyond mere content creation.",
    path: pathname,
    metaImage: "/services/content-development-banner.jpg",
  };
  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <ContentDevelopment />
      </div>
    </>
  );
};

export default page;

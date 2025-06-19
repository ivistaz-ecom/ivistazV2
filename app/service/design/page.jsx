'use client';
import React from "react";
import Designcomponents from "../../../components/ServiceComponents/Design";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const pathname = usePathname();

  const seoData = {
    title: "Tailored User-Friendly Web Design Services",
    description:
      "Discover iVistaz tailored web design services that are not only meticulously crafted to capture brand essence but also prioritises user and mobile friendliness.",
    path: pathname,
    metaImage: "/services/design-banner.jpg",
  };
  return (
    <>
      <NextSeo {...seoData} />
      <Designcomponents />
    </>
  );
};

export default page;

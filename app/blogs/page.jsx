'use client';

import React from "react";
import BlogsComponents from "../../components/BlogsComponents";
import NextSeo from "@/components/Seo/Seo";
import { usePathname } from "next/navigation";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Marketing services within an evolving digital ecosystem",
    description:
      "As trends and technologies in digital marketing rapidly evolve, iVistaz leverages its expertise to ensure you stay ahead of the curve.",
    path: pathname,
    metaImage: `${domainName}/industries/tech-banner.png`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="pt-24">
        <BlogsComponents />
      </div>
    </>
  );
};

export default page;

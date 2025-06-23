'use client';

import React from "react";
import OurTeam from "../../components/OurTeam";
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
      "Meet the iVistaz Team",
    description:
      "Get to know the talented team behind iVistaz. Our digital marketing experts are dedicated to helping your business succeed with innovative strategies and personalized service.",
    path: pathname,
    // metaImage: `${domainName}`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="pt-32">
        <div className="container mx-auto">
          <OurTeam />
        </div>
      </div>
    </>
  );
};

export default page;

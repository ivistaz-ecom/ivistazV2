"use client";

import React from "react";
import OurClients from "../../components/CompanyComponents/OurClients";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Our Clients",
    description:
      "Discover the diverse range of clients we serve at iVistaz. Our success stories highlight the impact of our tailored digital marketing strategies across various industries.",
    path: pathname,
    // metaImage: `${domainName}`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <div>
          <OurClients />
        </div>
      </div>
    </>
  );
};

export default page;

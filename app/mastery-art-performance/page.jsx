"use client";

import React from "react";
import MasteryArtPerformance from "../../components/MasteryArtPerformance/";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Mastery in Art Performance Marketing",
    description:
      "Achieve mastery in art performance marketing with iVistaz. Our specialized strategies help artists and performers increase their online visibility and reach, ensuring their talents are showcased to the right audience.",
    path: pathname,
    // metaImage: `${domainName}`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div>
        <div>
          <MasteryArtPerformance />
        </div>
      </div>
    </>
  );
};

export default page;

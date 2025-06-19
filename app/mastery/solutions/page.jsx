"use client";
import React from "react";
import MasterySolutions from "../../../components/Mastery/Solutions";
import NextSeo from "@/components/Seo/Seo";
import { usePathname } from "next/navigation";
const page = () => {
  const pathname = usePathname();
  const seoData = {
    title: "Expert Digital marketing solutions with iVistaz",
    description:
      "Ivistaz has mastered its art, providing expert digital marketing solutions that aim at value creation, increasing traffic, and generating leads and customers.",
    path: pathname,
    metaImage: "",
  };
  return (
    <>
      <NextSeo {...seoData} />
      <div className="bg-black flex flex-col justify-between py-24 border-b-2 border-dashed border-[#2D2D2D]">
        <div className="container mx-auto lg:px-0 px-4">
          {" "}
          <MasterySolutions />
        </div>
      </div>
    </>
  );
};

export default page;

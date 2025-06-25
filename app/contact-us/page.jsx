"use client";

import React from "react";
import ContactUs from "../../components/ContactUs";
import { usePathname } from "next/navigation";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const domainName =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ivistaz.com";
  const pathname = usePathname();
  const seoData = {
    title: "Contact Us",
    description:
      "Reach out to iVistaz Ecom Services Pvt. Ltd. for business inquiries, service requests, or any assistance. Visit us at our Bengaluru office or follow us on social media for updates and support. Get started on your journey towards enhanced performance with iVistaz today.",
    path: pathname,
    // metaImage: `${domainName}`,
  };

  return (
    <>
      <NextSeo {...seoData} />
      <div className="bg-black pt-24">
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default page;

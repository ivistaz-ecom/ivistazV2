import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex items-center flex-col justify-center">
          <p className="lg:text-[32px] text-xl text-center text-white lg:w-6xl">
            To help your brand to stand out in a highly crowded market, we will:
          </p>
        </div>
        <div className="container mx-auto">
          <ul className="list-disc text-white lg:text-lg pt-5 list-inside">
            <li>
              Develop and implement robust search strategies to drive your
              primary target audience to your brand store and marketplaces. Our
              digital marketing for beauty products focuses on optimizing search
              visibility and attracting potential customers interested in
              wellness products.
            </li>
            <li className="py-5">
              Create a robust performance-based e-commerce model with a
              monthly/quarterly goal of improving and sustaining your revenues.
              Through our online marketing service for beauty product brands, we
              ensure your brand achieves steady growth and increased online
              sales for wellness products.
            </li>
            <li>
              Create a robust e-commerce channel that will not only improve
              revenues on your e-store and marketplaces but also drive customers
              to your offline stores. With our social media marketing for beauty
              brands, we engage your audience across platforms, driving traffic
              to both your online and offline stores, maximizing your
              brand&apos;s reach and impact.
            </li>
          </ul>
        </div>
        <div className="pt-8 flex justify-center">
          <Link
            href="/contact-us"
            className="btn-14 py-2 rounded-full font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

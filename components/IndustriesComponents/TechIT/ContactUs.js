import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex items-center flex-col justify-center">
          <p className="lg:text-[32px] text-xl text-center text-white lg:w-6xl">
            Our digital marketing services for Tech and IT brands include:
          </p>
        </div>
        <div className="container mx-auto">
          <ul className="list-disc text-white lg:text-lg pt-5 list-inside">
            <li>
              Generate Marketing Qualified Leads (MQLs) with email marketing,
              SEM and SMM
            </li>
            <li className="py-5">
              Enhance the web experience for your customers with engaging UI/UX
              developed on a robust tech platform
            </li>
            <li>
              Content writing for your blogs, articles, eBooks, POVs, case
              studies, product-solution pages, campaign landing pages and
              newsletter content
            </li>
            <li className="py-5">
              Thought leadership content: White papers, articles and blogs for
              the CEO’s office
            </li>
            <li>
              Keyword research, on-page and off-page SEO to help your brand and
              offerings rank in the top 10 search results
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

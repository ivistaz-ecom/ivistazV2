import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex justify-center">
          <p className="lg:text-[28px] text-center text-white lg:w-6xl">
            To help your institution attract the right students and faculty, we
            will:
          </p>
        </div>
        <div className="container mx-auto">
          <ul className="list-disc text-white lg:text-lg pt-5 list-inside">
            <li>
              <span className="font-monument-bold">
                Improve your visibility on search engines
              </span>{" "}
              to ensure your programs show up where students are actively
              searching, with keyword-focused SEO and structured content.
            </li>
            <li className="py-5">
              <span className="font-monument-bold">
                Run high-intent performance campaigns
              </span>{" "}
              to reach the right student segments with targeted ads that convert
              interest into genuine leads.
            </li>
            <li>
              <span className="font-monument-bold">
                Craft compelling messaging and web content
              </span>{" "}
              to communicate your academic strengths, faculty expertise, and
              student impact through content that builds trust.
            </li>
            <li className="py-5">
              <span className="font-monument-bold">
                Implement smart retargeting journeys
              </span>{" "}
              to re-engage visitors who showed interest but didn’t act, guiding
              them back with relevant touchpoints.
            </li>
            <li>
              <span className="font-monument-bold">
                Design mobile-friendly enquiry forms
              </span>{" "}
              to capture more leads with forms that are easy to fill and
              strategically placed on high-conversion pages.
            </li>
            <li className="py-5">
              <span className="font-monument-bold">
                Build a consistent organic social media presence
              </span>{" "}
              by developing content that reflects your values, engages
              prospective students, and strengthens institutional identity.
            </li>
            <li className="">
              <span className="font-monument-bold">
                Develop and maintain a user-first website
              </span>{" "}
              to deliver a seamless experience with a website that’s optimised
              for search, credibility, and conversion.
            </li>
            
            <li className="py-5">
              <span className="font-monument-bold">
                Report on key performance metrics
              </span>{" "}
              to get clear, transparent dashboards that track enquiries,
              applications, etc.
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

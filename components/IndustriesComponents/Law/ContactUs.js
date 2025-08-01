import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex justify-center">
          <p className="lg:text-[28px] text-center text-white lg:w-6xl">
            To help your law firm attract and convert the right clients, we
            will:
          </p>
        </div>
        <div className="container mx-auto">
          <ul className="list-disc text-white lg:text-lg pt-5 lg:px-5">
            <li>
              <span className="font-monument-bold">
                Build an SEO strategy around your practice areas
              </span>{" "}
              so your firm appears for relevant keywords across Google and legal
              search platforms, improving discoverability where it matters most.
            </li>
            <li className="py-5">
              <span className="font-monument-bold">
                Strengthen your presence in local search and Google Maps
              </span>{" "}
              so nearby clients actively seeking legal services can find and
              contact you quickly and easily.
            </li>
            <li>
              <span className="font-monument-bold">
                Craft clear, credible legal content that builds authority
              </span>{" "}
              and supports legal content marketing in India by boosting trust
              and rankings for your niche practice areas.
            </li>
            <li className="py-5">
              <span className="font-monument-bold">
                Design intuitive landing pages that convert traffic into leads
              </span>{" "}
              with clean layouts, trust-building elements, and content that
              reflects your firm’s expertise and ethos.
            </li>
            <li>
              <span className="font-monument-bold">
                Use organic social media to increase brand awareness and
                engagement
              </span>{" "}
              by posting relevant legal insights,thought leadership content, and
              updates across platforms like LinkedIn and Instagram.
            </li>
            <li className="py-5">
              <span className="font-monument-bold">
                Support website development and maintenance designed for law
                firms
              </span>{" "}
              with features like mobile responsiveness, lead forms, and regular
              content updates for long-term credibility.
            </li>
          </ul>
        </div>
        {/* <div className="pt-8 flex justify-center">
          <Link
            href="/contact-us"
            className="btn-14 py-2 rounded-full font-semibold"
          >
            Contact Us
          </Link>
        </div> */}
      </div>
      <div className="lg:p-16 p-7">
        <Image
          src="/industries/law-002.png"
          alt="law"
          width={1200}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default ContactUs;

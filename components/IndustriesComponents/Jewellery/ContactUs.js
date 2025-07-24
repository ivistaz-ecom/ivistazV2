import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex items-center flex-col justify-center">
          <p className="lg:text-[32px] text-xl text-center text-white lg:w-6xl">
            We will help your business keep up with this dynamic industry by:
          </p>
        </div>
        <div className="container mx-auto">
          <ul className="list-disc text-white lg:text-lg pt-5 list-inside">
            <li>
              Creating and improving the connection between online visitors and
              sales, through end-to-end services, in order to increase online
              sales for jewelry brands and boost online conversions and sales
              both in-store and online.
            </li>
            <li className="py-5">
              Developing compelling and personalized online experiences that
              will strengthen customers’ loyalty to your brand, thus creating a
              more curated online experience. Our digital marketing for jewelry
              brands focuses on creating engaging content and leveraging social
              media platforms to enhance brand visibility and drive sales.
            </li>
            <li>
              Curating keywords that will ensure a lower cost of acquisition.
              Our paid marketing services for jewelry brands employ strategic
              keyword targeting to optimize ad campaigns and drive qualified
              traffic to your online store.
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
    </>
  );
};

export default ContactUs;

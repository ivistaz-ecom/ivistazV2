import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex items-center flex-col justify-center">
          <p className="lg:text-[32px] text-xl text-center text-white lg:w-6xl">
            We will help you to capitalize on this market opportunity with
            robust digital solutions that include:
          </p>
        </div>
        <div className="container mx-auto">
          <ul className="list-disc text-white lg:text-lg pt-5 lg:px-5">
            <li>
              Bridging the gap between online visitors and sales (in-store and
              online) both on your e-store, as well as on marketplaces and
              increasing online sales for fashion accessories.
            </li>
            <li className="py-5">
              Creating strong curated online experiences for your customers to
              strengthen brand loyalty. Our digital marketing for fashion brands
              focuses on crafting compelling content and engaging experiences to
              attract and retain customers.
            </li>
            <li>
              Ensuring consistent social media engagement with your customers.
              Our social media marketing for fashion brands ensures your brand
              stays top-of-mind and engages with your audience across platforms,
              driving brand awareness and loyalty.
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

import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex justify-center">
          <p className="lg:text-[28px] text-center text-white lg:w-6xl">
            We focus on strategies that optimize online sales for home
            appliances brands, leveraging targeted campaigns and data-driven
            insights to reach your ideal customers. Our approach will help you
            capture the growing market of online shoppers and drive significant
            sales growth.
          </p>
         
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

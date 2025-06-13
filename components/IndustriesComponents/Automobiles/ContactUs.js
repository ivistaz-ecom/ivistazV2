import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex items-center flex-col justify-center">
          <p className="lg:text-[28px] text-center text-white lg:w-6xl">
            Your brand to increase online enquiries, bookings and sales
            conversion ratios
          </p>
          <p className="lg:text-[28px] text-center text-white lg:w-6xl pt-5">
            You to increase your qualified leads and sales conversion ratios for
            you and for your dealers
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

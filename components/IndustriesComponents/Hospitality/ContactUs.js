import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex items-center flex-col justify-center">
          <p className="lg:text-[28px] text-xl text-center text-white lg:w-6xl">
            We can leverage our experience in digital marketing for the
            hospitality industry to grow and sustain online room revenues for
            your properties and in turn, help increase room occupancy, RevPAR
            (Revenue Per Available Room) and ADR (Average Daily Rate). We are
            also deeply aware that the customers of luxury hospitality brands
            are highly discerning, and our focus will be to enhance their
            overall digital experience with engaging UI/UX and content.
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

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactusContent = () => {
  return (
    <div className="container mx-auto">
      {/* Heading Section */}
      <div className="mb-8 lg:px-0 px-4">
        <h1 className="lg:text-[64px] text-3xl text-white font-monument-bold">
          CONTACT US
        </h1>
        <p className="text-white text-lg mt-2 font-monument-light lg:pt-0 pt-5">
          “The secret to getting ahead is getting started.” - Mark Twain
        </p>
        <p className="text-white text-lg pt-4 font-monument-light">
          Begin your journey towards performance now.
        </p>
      </div>

      {/* Form and Contact Info Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-0">
        {/* Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:py-4">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 iv-bg lg:my-5 rounded-xl flex flex-col justify-center">
          <h1 className="text-white lg:text-[30px] text-xl text-center lg:pb-4 pt-5 lg:pt-2 font-monument-bold">
            iVistaz Ecom Services Pvt. Ltd.
          </h1>
          <div className="py-5">
            <p className="text-white font-monument-bold text-center text-xl py-2">
              Business Enquiries
            </p>
            <p className="text-center">
              <a
                href="tel:+918041966600"
                className="text-white font-monument-bold text-xl no-underline"
              >
                +91 80 41966600
              </a>
            </p>
            <p className=" text-center text-xl py-2">
              <Link
                href="mailto:reach@ivistaz.com"
                className="text-white font-monument-bold underline"
              >
                reach@ivistaz.com
              </Link>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="text-center pt-4 pb-5">
            <div className="flex items-center justify-center gap-2">
              <p className="text-white mr-2 text-2xl font-monument-bold">
                Follow Us:
              </p>
              <Link
                href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/"
                target="_blank"
              >
                <div className="w-10 h-10 bg-[#700D0B] rounded-full flex items-center justify-center p-3">
                  <FaLinkedinIn size={30} className="text-white " />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/ivistazecomservices/"
                target="_blank"
              >
                <div className="w-10 h-10 bg-[#700D0B] rounded-full flex items-center justify-center p-3">
                  <FaInstagram size={30} className="text-white" />
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/people/IVistaz-Ecom-Services/61564957311627/"
                target="_blank"
              >
                <div className="w-10 h-10 bg-[#700D0B] rounded-full flex items-center justify-center p-3">
                  <FaFacebookF size={30} className="text-white" />
                </div>
              </Link>
              <Link href="https://x.com/ivistazecom" target="_blank">
                <div className="w-10 h-10 bg-[#700D0B] rounded-full flex items-center justify-center p-3">
                  <FaXTwitter size={30} className="text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusContent;

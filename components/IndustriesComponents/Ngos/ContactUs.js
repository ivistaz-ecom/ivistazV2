import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="iv-bg lg:p-16 p-7">
        <div className="flex items-center flex-col justify-center">
          <p className="lg:text-[32px] text-xl text-center text-white lg:w-6xl">
            Our digital marketing services for nonprofit organizations will help
            your audience understand your niche and help create awareness for
            your projects:
          </p>
        </div>
        <div className="container mx-auto">
          <ul className="list-disc text-white lg:text-lg pt-5 lg:px-5">
            <li>
              Evaluating or reframing the current positioning, message, and
              narrative for value creation
            </li>
            <li className="py-5">
              Generating traction for your website and offerings with
              captivating content and SEO
            </li>
            <li>
              Generating new and repeat visitors for your website and improving
              engagement with content that resonates
            </li>
            <li className="py-5">
              Crafting SEO strategies to improve your search engine rankings and
              drive relevant traffic to your website
            </li>
            <li>
              Email marketing to help generate interest from relevant resource
              and funding organizations for your social impact projects
            </li>
            <li className="py-5">
              Targeted campaigns on Google and Meta to generate outcomes for
              your CSR projects
            </li>
            <li>
              Web design and re-design to create a seamless UX/UI and help
              deliver an intuitive user experience
            </li>
            <li className="py-5">
              End-to-end social media management including content, design, and
              engagement analysis
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

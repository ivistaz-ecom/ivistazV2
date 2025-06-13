import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="pt-5">
        <div className="bg-white lg:p-12 rounded-2xl px-5 p-5">
          <h2 className="text-[48px] text-[#ed2225] font-monument-bold">
            Solutions
          </h2>
          <p className="font-monument-light lg:text-lg">
            Through a range of digital marketing services, we offer our clients
            solutions to their pressing challenges whether lead-generation,
            online sales or web traffic. Our solutions include:
          </p>
          <div className="lg:px-10 py-5">
            <h2 className="text-[28px] text-[#ed2225] font-monument-bold">
              Traffic
            </h2>
            <p className="font-monument-light lg:text-lg py-5">
              Web traffic is a function of SEO, content, and UI/UX coming
              together. We will research and create a repository of keywords to
              match the search intent of your customers. A robust combination of
              primary, secondary, and tertiary keywords and long-tail phrases
              will be infused into your web content to maximize Page 1 ranking
              for your keywords. Your traffic will be further boosted with
              off-page SEO, social bookmarking, directory, blog page, Quora, and
              video submissions.
            </p>
            <p className="font-monument-light lg:text-lg">
              Read our success stories for boosting online sales with SEO{" "}
              <Link
                href="/case-studies/digital-marketing-strategy-case-study-boosting-audio-equipment-sales-with-seo-and-amazon-marketing-2"
                className="text-[#ed2225] underline"
              >
                here.
              </Link>
            </p>
            <h2 className="text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Lead-Gen
            </h2>
            <p className="font-monument-light lg:text-lg py-5">
              If you are a B2B company looking to consistently deliver MQLs
              (Marketing Qualified Leads) to your sales pipeline, we are here to
              help. Our lead-gen team will understand your goals and develop
              robust social and email marketing plans to generate Leads with
              Digital Marketing.
            </p>
            <p className="font-monument-light lg:text-lg">
              Read our B2B lead-gen case studies{" "}
              <Link href="/case-studies" className="text-[#ed2225] underline">
                here.
              </Link>
            </p>
            <h2 className="text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Online Sales
            </h2>
            <p className="font-monument-light lg:text-lg py-5">
              Whether it is B2C products like home appliances, automobiles,
              earphones, airline tickets, or hotel room bookings, we have helped
              businesses significantly increase Online Sales with Digital
              Marketing. Our e-commerce marketing strategies and capabilities
              include Organic Search, Paid Search/Google PPC, real-time bidding,
              Organic and Paid Social marketing, and Amazon marketing. Our ad
              campaigns are designed not just to create awareness and demand for
              your products and services but will also keep a sharp eye on your
              CPL (Cost Per Lead) and ROAS (Return on Ad Spend).
            </p>
            <p className="font-monument-light lg:text-lg">
              Read our success stories for boosting online sales{" "}
              <Link href="/case-studies" className="text-[#ed2225] underline">
                here.
              </Link>
            </p>
            <h2 className="text-[28px] text-[#ed2225] font-monument-bold pt-4">
              User Experience
            </h2>
            <p className="font-monument-light lg:text-lg py-5">
              Today, the first customer touch point takes place online. That’s
              the premise we begin with when we design digital journeys.
            </p>
            <p className="font-monument-light lg:text-lg">
              We are passionate about building web and mobile experiences that
              will bring your customers back to engage with your website, brand,
              and content. For UI/UX, we combine design with data and analytics
              to create seamless experiences—desktop, mobile, or apps. Our
              platform capabilities include WordPress, React, JS, Node, and
              Magento.
            </p>
            <p className="font-monument-light lg:text-lg pt-4">
              Read our success stories for boosting online sales{" "}
              <Link href="/contact-us" className="text-[#ed2225] underline">
                here.
              </Link>
            </p>
            <h2 className="text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Value Creation
            </h2>
            <p className="font-monument-light lg:text-lg pt-5">
              We understand that creating value for your company/brand lies
              primarily in how you communicate your value proposition. Our
              strategy and copy team will collaborate with you to craft the
              messaging and narrative for your company/brand, working to
              increase brand value with digital marketing.
            </p>

            <p className="font-monument-light lg:text-lg pt-4">
              Read our success stories for enhancing engagement through value
              creation{" "}
              <Link
                href="/case-studies/top-beauty-brand-case-study-optimising-ecommerce-conversion-and-mobile-engagement"
                className="text-[#ed2225] underline"
              >
                here.
              </Link>
            </p>
          </div>
          <div className="flex justify-center pt-5">
            <Link href="/contact-us">
              <span className="btn-19">Transform Your Business Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

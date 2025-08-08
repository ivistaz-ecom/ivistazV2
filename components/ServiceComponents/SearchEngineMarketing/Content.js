import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto lg:px-20 px-5 text-lg">
          <h3 className="font-monument-semibold ">
            Customers are continuously online and on the move, responding to
            stimuli and searching online.
          </h3>
          <h3 className="font-monument-semibold ">
            Are you there, or will you be missed?
          </h3>
          <h3 className="font-monument-semibold pt-4">
            Buyers are continuously tapping, scrolling, and clicking.
          </h3>
          <h3 className="font-monument-semibold ">
            Will you be noticed or passed over?
          </h3>
          <p className="py-5 font-monument-light">
            Digital journeys and buying decisions are unpredictable, impulsive,
            and fragmented. Buying decisions take place in micro-moments.
            However, when customers leave footprints online about what they are
            looking for, Search Engine Marketing (SEM) becomes essential. It
            helps businesses to showcase the right product or solution to the
            right target audience at the right time. With expert pricing,
            bidding, and targeting strategies, we can help your product or
            service advertisements be placed at the top of Search Engine Results
            Pages (SERP).
          </p>
          <h3 className="text-[#ed2023] text-[28px] font-monument-bold">
            Web Design Services
          </h3>
          <p className="font-monument-light pt-5">
            Bidding and competition on top search engines like Google, Bing, and
            Yahoo! are intense. Imagine thousands of brands vying for the same
            space to get the attention and eyeballs of the same audience! To get
            top placements for your ad on the Search Engine Results Page (SERP),
            you will need an expert partner to craft your message, include the
            right keywords, exclude negative words, and deploy the right bidding
            strategy. As a leading search engine marketing company, we
            specialize in Pay-Per-Click advertising and paid search advertising
            to ensure your ads reach the intended audience effectively.
          </p>
          <p className="font-monument-light pt-5">
            Depending on your needs, we will recommend search ads, display ads,
            video ads, shopping ads, and discovery ads to drive traffic to your
            web conversion pages. As a premier video advertising agency, we
            ensure that your video ads are compelling and targeted. While
            helping you with online leads, sales, or bookings, our focus will
            also be to optimise your Cost Per Lead (CPL).
          </p>

          <p className="text-[#ed2023] text-[20px] font-monument-bold pt-5">
            Need help with your Search Engine Marketing?{" "}
            <Link href="/contact-us" className="underline">
              Contact us
            </Link>{" "}
          </p>
          <p className="text-[#ed2023] text-[20px] font-monument-bold pt-5 pb-10">
            Explore our ecommerce marketing services{" "}
            <Link href="/performance-marketing-for-ecommerce" className="underline">
              here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;

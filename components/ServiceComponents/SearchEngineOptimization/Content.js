import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto lg:px-20 px-5 text-lg">
          <h3 className="font-monument-semibold ">
            If your company, product, or service does not show up in the top 10
            search results, that enquiry, lead, or sale is going to your
            competitor. That’s why SEO is crucial for your business.
          </h3>

          <p className="py-5 font-monument-light">
            Today, the search for a product, solution, service or person
            inevitably begins online (view SEO-related stats{" "}
            <Link
              href="https://www.webfx.com/seo/statistics/#:~:text=When%20people%20go%20online%20to,search%20engine%20to%20guide%20them."
              target="_blank"
              className="text-[#ed2023] underline"
            >
              here
            </Link>
            ).
          </p>

          <p className="font-monument-light">
            With that opportunity comes an enormous challenge.
          </p>
          <p className="font-monument-light pt-5">
            There are 2 trillion global searches per year, translating to 8.5
            billion searches per day. A staggering 75% of users never scroll
            past the first page of search results. These stark statistics
            underscore the critical importance of Search Engine Optimization
            (SEO) services in driving organic traffic and maximizing online
            visibility.
          </p>
          <p className="font-monument-light pt-5">
            At iVistaz, we recognize the dynamic nature and intricacies of the
            SEO landscape. As a leading SEO agency in Bangalore, we navigate
            evolving algorithms and ranking factors with proven SEO practices to
            deliver on your traffic and SEO goals.
          </p>
          <p className="font-monument-light pt-5">
            Our experts understand that SEO requires a nuanced understanding of
            your target audience, industry trends, and competitive landscape. We
            employ a holistic approach that encompasses both on-page and
            off-page optimization strategies. From keyword research and content
            optimization to link building and technical SEO audits, we address
            each factor with a meticulous approach to elevate your brand&apos;s
            digital presence. By analyzing user intent and behaviour, we
            recommend and craft tailored content to align with SEO strategies
            that resonate with your audience and drive meaningful engagement
            with your web pages. Additionally, our local SEO services ensure
            that your business stands out in local search results, further
            enhancing your visibility and reach.
          </p>
          <p className="font-monument-light pt-5">
            iVistaz will provide weekly, monthly, and quarterly reports to help
            you track progress on keyword ranking and its impact on your web
            traffic and user engagement with your most important pages.
          </p>
          <p className="text-[#ed2023] text-[20px] font-monument-bold pt-5 pb-10">
            Elevate your business with proven SEO strategies.{" "}
            <Link href="/contact-us" className="underline">
              Contact us
            </Link>{" "}
            today to start seeing real results.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;

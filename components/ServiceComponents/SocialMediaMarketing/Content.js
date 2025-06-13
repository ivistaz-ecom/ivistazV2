import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto lg:px-20 px-5 text-lg">
          <h3 className="font-monument-semibold ">
            “Social media is not just a spoke on the wheel of marketing. It’s
            becoming the way entire bicycles are built.” – Ryan Lilly, Author,
            Entrepreneur, Kauffman Foundation
          </h3>

          <p className="py-5 font-monument-light">
            From targeting and retargeting to leveraging look-alike and custom
            audiences, as well as diving into demographics, behaviours,
            attributes, and interests – the power of precise targeting with
            social media advertising can be invaluable in helping businesses
            generate leads or sell online.
          </p>
          <p className="font-monument-light">
            Leveraging social media marketing services for driving website
            traffic, generating leads, or facilitating online sales goes beyond
            crafting compelling content or eye-catching visuals. Targeting,
            timing, ad formats, and bidding strategies must all come together in
            a well-thought-out plan. Only then can social media marketing truly
            fulfil its objectives and propel businesses towards success.
          </p>
          <p className="font-monument-light pt-5">
            We understand the critical role that social media plays in helping
            you reach your goals, and we&apos;re here to guide your brand towards
            success in this dynamic arena. For businesses in both the B2B and
            B2C sectors, through social media ad campaigns, we will harness the
            intricacies of audience segmentation to ensure that your ad is seen
            by the right people through the right social media platforms,
            working to generate traffic through Twitter ads, LinkedIn ads,
            YouTube ads and Facebook ads.
          </p>
          <p className="text-[#ed2023] text-[20px] font-monument-bold pt-5 pb-10">
          Leads, online sales, enquiries, room bookings - what goals do you want to achieve with social media marketing?{" "}
            <Link href="/contact-us" className="underline">
              Contact us
            </Link>{" "}
            today.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;

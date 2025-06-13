import Link from "next/link";
import React from "react";
import AppExpertise from "./AppExpertise";
import Technology from "./Technology";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto lg:px-20 px-5 text-lg">
          <h3 className="font-monument-semibold ">
            If your website is not engaging, intuitive, and visually appealing,
            you&apos;re losing potential customers to competitors. That is why a
            professionally designed website by a top website designing company
            is crucial to bring back visitors for meaningful engagement.
          </h3>

          <p className="py-5 font-monument-light">
            Your brand&apos;s reputation hinges on your digital footprint. The
            website and mobile app serve as the primary showcases for your
            brand, products, expertise, and distinctiveness.
          </p>
          <p className="font-monument-light">
            With over 28 years of experience, we have crafted more than 500
            websites for businesses spanning aviation, e-commerce, healthcare,
            home appliances, hospitality, NGOs, technology, real estate, and
            retail.
          </p>
          <p className="font-monument-light pt-5">
            As a leading website development company in Bangalore, we prioritize
            user-centricity in our web design and development process and delve
            into questions on behalf of your users: &quot;How easily can they
            access information?&quot; and &quot;How many steps are required from
            discovery to enquiry?&quot; This approach embodies User Experience
            (UX) principles, encompassing design, interface, information
            architecture, navigation, and content.
          </p>
          <p className="font-monument-light pt-5">
            Whether you need a B2B website, a compelling website for your NGO,
            or a solution from a mobile app development company, we tailor our
            designs to align with your digital marketing objectives while
            optimizing user experience.
          </p>

          <div>
            <AppExpertise />
          </div>
          <div>
            <Technology />
          </div>
          <p className="text-[#ed2023] text-[20px] font-monument-bold pb-10">
            <Link href="/contact-us" className="underline">
              Contact us
            </Link>{" "}
            today to embark on your journey to digital success.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;

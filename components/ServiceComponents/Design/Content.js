import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <div className="container mx-auto lg:px-20 px-5 text-lg">
          <h3 className="font-monument-semibold ">
            “Design is not just what it looks like and feels like. Design is how
            it works.” - Steve Jobs
          </h3>
          <p className="py-5 font-monument-light">
            At iVistaz, we understand the critical role that design plays in
            captivating audiences and conveying your brand&apos;s message
            effectively. As a leading website design agency, our design services
            encompass various facets, including web design, logo design,
            collateral creation (brochures, white papers, case studies, etc.),
            infographic design, PowerPoint presentations, and newsletter design.
          </p>
          <h3 className="text-[#ed2023] text-[28px] font-monument-bold">
            Web Design Services
          </h3>
          <p className="font-monument-light pt-5">
            Our web design services are tailored to create visually appealing
            and user-friendly websites that align with your brand identity and
            objectives. As a user experience design agency, we prioritize not
            only aesthetic appeal but also user experience (UX) and user
            interface (UI) design to ensure that your website delivers an
            engaging and intuitive browsing experience for your visitors. Our
            designers meticulously craft each element of your website, focusing
            on navigation ease, page load speed, and mobile responsiveness to
            enhance user satisfaction and encourage prolonged engagement.
          </p>
          <p className="font-monument-light pt-5">
            Today, mobile devices contribute to the majority of web traffic.
            Recognizing this shift, our web design philosophy revolves around a
            mobile-first approach to ensure an optimal user experience across
            all devices. As a premier UI UX design company in Bangalore, unlike
            traditional methods that merely adapt desktop designs for mobile
            screens, we take a proactive stance by crafting mobile responsive
            web designs from the ground up.
          </p>
          <p className="font-monument-light pt-5">
            Our mobile-first approach goes beyond mere responsiveness; it
            prioritizes seamless navigation, minimises scrolling requirements,
            integrates intuitive search functionality, and streamlines
            form-filling processes for enhanced user convenience. By placing
            mobile users at the forefront of our design process, we endeavor to
            make your website not only visually stunning but also function
            seamlessly across devices to maximize engagement and conversions.
          </p>
          <h3 className="text-[#ed2023] text-[24px] font-monument-bold py-5">
            Logo Design
          </h3>
          <p className="font-monument-light">
            Whether it is your brand/company logo or a logo for your sub-brand,
            unit, or initiative, our designers will work closely with you to
            understand your brand ethos and create a logo that encapsulates your
            unique identity.
          </p>
          <h3 className="text-[#ed2023] text-[24px] font-monument-bold py-5">
            Infographics
          </h3>
          <p className="font-monument-light">
            Infographics serve as powerful tools for communicating key messages
            and insights in a digestible format, enhancing audience engagement
            and retention. We will spend time understanding your brief and
            translating them into visually striking graphics that are easy to
            understand and share.
          </p>
          <h3 className="text-[#ed2023] text-[24px] font-monument-bold py-5">
            Collateral Design
          </h3>
          <p className="font-monument-light">
            Our collateral design services include the creation of various
            marketing materials, like brochures, white papers, and other
            promotional materials.
          </p>
          <p className="text-[#ed2023] text-[20px] font-monument-bold pt-5 pb-10">
            What is your design requirement?{" "}
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

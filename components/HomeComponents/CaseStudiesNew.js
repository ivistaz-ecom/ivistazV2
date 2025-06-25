"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/new-home-page/case-studies/lead-conversion.png",
    title: "10.8% Lead Conversion Rate",
    subtitle:
      "B2B Email Marketing Success for a Consulting Organization in the Social Impact Space",
    textColor: "text-[#64188D]",
    gradientFrom: "#9042BC",
    gradientTo: "#0028AF",
    caseLink:
      "/case-studies/b2b-email-marketing-case-study-delivering-qualified-leads-to-generate-interest-to-invest-in-the-clients-social-impact-projects",
  },
  {
    image: "/new-home-page/case-studies/online-sales.png",
    title: "8X Increase in online sales",
    subtitle: "E-commerce Success Story for a Leading Appliance Brand",
    textColor: "text-[#0071A3]",
    gradientFrom: "#147FAF",
    gradientTo: "#099F6B",
    caseLink:
      "/case-studies/online-sales-success-for-a-leading-kitchen-appliance-brand",
  },
  {
    image: "/new-home-page/case-studies/unique-leads.png",
    title: "300,000 Unique Leads in 3 Years",
    subtitle: "For a Global Retail Corporation’s MSME CSR Project",
    textColor: "text-[#000000]",
    gradientFrom: "#C7501B",
    gradientTo: "#D96A8C",
    caseLink:
      "/case-studies/b2b-lead-gen-case-study-delivering-outcomes-with-paid-marketing-for-a-global-retail-giants-csr-project",
  },
];

const CaseStudiesNew = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Embla Carousel */}
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] relative group" key={index}>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={600}
                className="w-full lg:h-[600px] h-[200px] object-cover"
              />
              <Link href={slide.caseLink}>
                {/* Replaced Overlay Card */}
                <div className=" bottom-0 left-0 right-0 z-10 w-full">
                  <div className="relative group w-full h-[130px] flex items-stretch">
                    {/* Main Card */}
                    <div className="flex-1 bg-white shadow flex items-center p-6 z-10 w-full">
                      <div className="lg:flex justify-between items-center gap-5 w-full">
                        <h2
                          className={`lg:text-[40px] font-monument-bold text-xl ${slide.textColor}`}
                        >
                          {slide.title}
                        </h2>
                        <span className="h-20 w-0.5 bg-[#C3C3C3]"></span>
                        <p className="lg:text-[28px] font-monument-light text-black text-sm pt-3">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Block */}
                    <div
                      className="w-20 h-auto flex items-center justify-center shadow 
      md:flex 
      
      opacity-100 
      transition-all duration-500 ease-in-out"
                      style={{
                        background: `linear-gradient(to bottom, ${slide.gradientFrom}, ${slide.gradientTo})`,
                      }}
                    >
                      <Image
                        src="/new-home-page/white-arrow-right.png"
                        alt="arrow black"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 lg:top-1/2 top-[30%] -translate-y-1/2 z-10 text-white"
      >
        <Image
          src="/new-home-page/right.svg"
          width={30}
          height={30}
          alt="Prev"
          className="lg:w-10 lg:h-10 w-5 h-5"
        />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 lg:top-1/2 top-[30%] -translate-y-1/2 z-10 text-white"
      >
        <Image
          src="/new-home-page/left.svg"
          width={30}
          height={30}
          alt="Next"
          className="lg:w-10 lg:h-10 w-5 h-5"
        />
      </button>
    </div>
  );
};

export default CaseStudiesNew;

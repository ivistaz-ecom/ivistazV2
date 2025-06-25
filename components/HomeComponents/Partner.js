"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const logos = [
  "/new-home-page/logo/abb.png",
  "/new-home-page/logo/benz-new.png",
  "/new-home-page/logo/mahendra.png",
  "/new-home-page/logo/ww.png",
  "/new-home-page/logo/toyota.png",
  "/new-home-page/logo/oberoi.png",
  "/new-home-page/logo/taj-new.png",
  "/new-home-page/logo/zuri.png",
  "/new-home-page/logo/trident.png",
  "/new-home-page/logo/oracle.png",
  "/new-home-page/logo/siemens.png",
  "/new-home-page/logo/hexaware.svg",
  "/new-home-page/logo/wipro.png",
  "/new-home-page/logo/ibm.png",
  "/new-home-page/logo/imagination.png",
  "/new-home-page/logo/moto.png",
  "/new-home-page/logo/jeeves.png",
  "/new-home-page/logo/philips.png",
  "/new-home-page/logo/eureka-new.png",
  "/new-home-page/logo/bosch-new.png",
  "/new-home-page/logo/blue-star-new.png",
  "/new-home-page/logo/ifb-new.png",
  "/new-home-page/logo/cf.png",
  "/new-home-page/logo/walmart.png",
  "/new-home-page/logo/chartered.png",
  "/new-home-page/logo/brigade.png",
  "/new-home-page/logo/century.png",
  "/new-home-page/logo/tech-park.png",
  "/new-home-page/logo/igate.png",
  "/new-home-page/logo/himalaya.png",
  "/new-home-page/logo/titan.png",
  "/new-home-page/logo/govo.png",
  "/new-home-page/logo/ayurveda.png",
  "/new-home-page/logo/magnasoft.png",
];

export default function PartnerCarousel() {
  const autoplay = useRef(
    Autoplay(
      {
        delay: 1000, // 1 second per slide
        stopOnInteraction: false,
      },
      (emblaRoot) => emblaRoot.parentElement // target the parent container
    )
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  return (
    <div className="bg-white p-5">
      <div className="overflow-hidden container mx-auto" ref={emblaRef}>
        <div className="flex">
          {logos.map((src, index) => (
            <div
              className="min-w-[150px] px-6 flex justify-center items-center"
              key={index}
            >
              <Image
                width={150}
                height={150}
                src={src}
                alt={`Logo ${index}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

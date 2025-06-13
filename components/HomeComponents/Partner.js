"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const logos = [
  "/new-home-page/logo/benz.png",
  "/new-home-page/logo/audi.png",
  "/new-home-page/logo/eureka.png",
  "/new-home-page/logo/bosch.png",
  "/new-home-page/logo/taj.png",
  "/new-home-page/logo/blue.png",
  "/new-home-page/logo/ifb.png",
  "/new-home-page/logo/benz.png",
  "/new-home-page/logo/audi.png",
  "/new-home-page/logo/eureka.png",
  "/new-home-page/logo/bosch.png",
  "/new-home-page/logo/taj.png",
  "/new-home-page/logo/blue.png",
  "/new-home-page/logo/ifb.png",
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

"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Mastery() {
  const [isActive, setIsActive] = useState(false);
  const masteryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (masteryRef.current) {
      observer.observe(masteryRef.current);
    }

    return () => {
      if (masteryRef.current) {
        observer.unobserve(masteryRef.current);
      }
    };
  }, []);

  return (
    <div ref={masteryRef} id="mastery" className="container mx-auto mb-5 pt-24">
      <div className="p-0">
        <h1 className="lg:text-[88px] text-3xl font-monument-bold lg:px-0 px-4 ">
          Mastery
        </h1>
      </div>
      <div className="p-0">
        <p
          className={`font-monument-bold lg:px-0 px-4  leading-relaxed text-black lg:text-[30px] text-lg transition-colors duration-1000 py-5 ${
            isActive ? "text-black" : ""
          }`}
        >
          As a performance-marketing agency, we&apos;ve mastered the intricacies
          of digital marketing over the years, crafting winning strategies
          rooted in deep insights. Through ongoing learning and training, we
          have adeptly navigated the digital landscape. Our commitment is
          reflected in our meticulous approach to every step, guiding clients to
          their digital goals with precision and mastery.
        </p>
      </div>
      <div className="lg:px-0 px-4  lg:pb-10">
        <Link href="/mastery" className="btn-11 ">
          Know More
        </Link>
      </div>
    </div>
  );
}

export default Mastery;

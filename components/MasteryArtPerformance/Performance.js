"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Performance() {
  const [isActive, setIsActive] = useState(false);
  const performanceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (performanceRef.current) {
      observer.observe(performanceRef.current);
    }

    return () => {
      if (performanceRef.current) {
        observer.unobserve(performanceRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={performanceRef}
      id="performance"
      className="container mx-auto mb-5"
    >
      <div className="p-0">
        <h1 className="lg:text-[88px] text-3xl font-monument-bold lg:px-0 px-4 text-red-600">
          Performance
        </h1>
      </div>
      <div className="p-0">
        <p
          className={`font-monument-bold lg:px-0 px-4 transition-colors duration-1000 lg:text-[30px] text-lg py-5 ${
            isActive ? "text-red-600" : "text-[#F36669]"
          }`}
        >
          Over the years, iVistaz has excelled by partnering with clients to
          craft unforgettable digital journeys. As a revenue-driven digital
          marketing agency, we consistently strive to surpass expectations with
          every performance.
        </p>
      </div>
      <div className="lg:px-0 px-4 pb-10">
        <Link
          href="/performance"
          className="btn-11"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

export default Performance;

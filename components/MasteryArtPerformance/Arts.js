"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Arts() {
  const [isActive, setIsActive] = useState(false);
  const artRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (artRef.current) {
      observer.observe(artRef.current);
    }

    return () => {
      if (artRef.current) {
        observer.unobserve(artRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <div ref={artRef} id="art" className="container mx-auto py-5 mb-5 lg:px-0 px-4">
        <div className="p-0">
          <h1 className="lg:text-[88px] text-3xl font-monument-bold text-white">Art</h1>
        </div>
        <div className="p-0">
          <p
            className={`font-monument-bold leading-relaxed text-gray-400 lg:text-[30px] text-lg transition-colors duration-1000 py-5 ${
              isActive ? "text-white" : ""
            }`}
          >
            We’ve been crafting and creating art that captivates and resonates
            with our clients and their audiences. As the digital world continues
            to evolve, we have kept pace, adapting our digital branding strategy
            and other strategies to the ever-changing landscape. With
            personalized solutions and a commitment to meet clients’
            expectations, we delivered what was expected of us. Our point of
            differentiation was the performance-focused model, which earned us a
            reputation for excellence making us a trusted choice for over 300
            brands.
          </p>
        </div>
        <div className="lg:px-0 px-1 lg:pb-10">
          <Link
            href="/art"
             className="btn-12"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Arts;

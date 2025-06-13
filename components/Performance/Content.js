import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <div>
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row container mx-auto lg:pb-0 pb-10">
        <div className="flex flex-col justify-center lg:w-[90%] lg:-mt-32">
          <p className="text-white text-[20px] font-semibold">
            <span className="font-monument-bold-italic">
              “Behind every brilliant performance there were countless hours of
              practice and preparation.”
            </span>{" "}
            – Eric Butterworth
          </p>
          <p className="text-white mt-4 text-[20px]">
            We work in collaboration with our clients to design digital journeys
            that create experiences that people will never forget; and for that
            we intend to deliver performance beyond expectations.
          </p>
          <p className="text-white mt-4 text-[20px]">
            By creating high-performing digital marketing campaigns, we increase
            website traffic with SEO and content marketing. Through
            transformative digital experience design and performance
            optimization strategies, we make sure we deliver exactly what the
            client needs, and more.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row gap-4 w-[400px]">
            <Link
              href="/performance/industries"
              className="btn-13 py-2 rounded-full font-semibold"
            >
              Industries
            </Link>
            <Link
              href="/case-studies"
              className="btn-13 py-2 rounded-full font-semibold"
            >
              Case Studies
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Image
            src="/performance/performance_image.svg"
            width={600}
            height={200}
            alt="Mastery"
            className="object-cover lg:w-[800px] w-96 lg:pt-28 pt-10 lg:mx-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

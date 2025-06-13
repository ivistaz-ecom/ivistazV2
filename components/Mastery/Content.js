import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <div>
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row  container mx-auto lg:pb-0 pb-10">
        <div className="flex justify-center items-end">
          <Image
            src="/mastery/mastery_image.svg"
            width={600}
            height={200}
            alt="Mastery"
            className="object-cover lg:w-[800px] w-96 mt-20 lg:mx-32"
          />
        </div>
        <div className="flex flex-col justify-center lg:w-[80%] lg:px-5 -mt-10">
          <p className="text-white text-[20px] font-semibold">
            <span className="font-monument-bold-italic">
              “Mastery demands all of a person.”
            </span>{" "}
            – Albert Einstein
          </p>
          <p className="text-white mt-4 text-[20px]">
            Years of being in the digital marketing landscape and working with
            over 300+ clients have given us insights into how to master every
            aspect of this dynamic industry. Want to know how we do it?
          </p>
          <div className="mt-8 flex flex-col lg:flex-row gap-4 w-[400px]">
            <Link
              href="/mastery/about-us"
              className="btn-13 py-2 rounded-full font-semibold"
            >
              About Us
            </Link>
            <Link
              href="/mastery/solutions"
              className="btn-13 py-2 rounded-full font-semibold"
            >
              Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

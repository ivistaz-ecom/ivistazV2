import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between lg:px-0 px-4 container mx-auto">
          <Link href="/welcome">
            <Image src="/ivista_logo.svg" width={200} height={100} alt="logo" />
          </Link>
          <div>
            <h1 className="text-xl font-bold">November 2025</h1>
          </div>
        </div>
        <div>
          <Image
            src="/nov-newsletter/banner.png"
            width={1000}
            height={1000}
            alt="banner"
            className="w-full h-full object-cover py-10"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;

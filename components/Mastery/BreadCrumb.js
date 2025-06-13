import Link from "next/link";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const BreadCrumb = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center mb-3 whitespace-nowrap">
        <Link href="/welcome" className="text-white text-md px-1">
          Home
        </Link>
        <span className="px-1 text-white">
          <CiCircleChevRight />
        </span>
        <span className="text-white text-md px-1">Mastery</span>
      </div>
      <h1 className="text-white lg:text-[70px] text-4xl pb-4 font-monument-bold">
        MASTERY
      </h1>
    </div>
  );
};

export default BreadCrumb;

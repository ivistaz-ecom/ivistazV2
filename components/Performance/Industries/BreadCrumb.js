import Link from "next/link";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const BreadCrumb = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center mb-3 whitespace-nowrap">
        <Link href="/welcome" className="text-black text-md px-1">
          Home
        </Link>
        <span className="px-1 text-black">
          <CiCircleChevRight />
        </span>
        <Link href="/performance">
          <span className="text-black text-md px-1">Performance</span>
        </Link>
        <span className="px-1 text-black">
          <CiCircleChevRight />
        </span>
        <span className="text-black text-md px-1">Industries</span>
      </div>
    </div>
  );
};

export default BreadCrumb;

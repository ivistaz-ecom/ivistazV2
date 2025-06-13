import Link from "next/link";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const BreadCrumb = () => {
  return (
    <>
      <div>
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 lg:px-0 px-4 whitespace-nowrap text-white text-sm">
          <Link href="/welcome" className="px-1 hover:underline">
            Home
          </Link>
          <span className="px-1">
            <CiCircleChevRight />
          </span>
          <Link href="/performance" className="px-1 hover:underline">
            Performance
          </Link>
          <span className="px-1">
            <CiCircleChevRight />
          </span>
          <Link href="/case-studies" className="px-1 hover:underline">
            Case Studies
          </Link>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;

"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import { CiCircleChevRight } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Mastery from "../../components/Mastery";
function Page() {
  const pathname = usePathname();
  const title = "Achieve Marketing Mastery ";
  const description =
    " Reach new heights of marketing mastery with iVistaz. Our expert team provides tailored strategies and insights to help you dominate your market and achieve long-term success.";
  const path = `${pathname}`;
  const metaImage = "";

  return (
    <>
      <div className="bg-black flex flex-col justify-between min-h-screen pt-24 border-b-2 border-dashed border-[#2D2D2D]">
        <div className="container mx-auto lg:px-0 px-4">
          <Mastery />
        </div>
      </div>
    </>
  );
}

export default Page;

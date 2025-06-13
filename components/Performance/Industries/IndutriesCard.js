import { IndutriesCardData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IndutriesCard = () => {
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-4 gap-5 py-10">
          {IndutriesCardData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-7 flex flex-col justify-center items-center my-5"
            >
              <div>
                <Image src={item.imgUrl} alt="icon" width={100} height={100} />
              </div>
              <h4 className="text-[20px] text-[#000] pt-7 font-monument-medium text-center">
                {item.title}
              </h4>

              <p className="pt-5 font-monument-light lg:text-xl pb-4">{item.desc}</p>

              <button className="btn-151 border">
                <Link href={item.pageLink}>
                  <p className="">Read More</p>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndutriesCard;

"use client";
import { MasteryAboutUsData } from "@/utils/data";
import React, { useState } from "react";

const Card = () => {
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-3 gap-5 py-10">
          {MasteryAboutUsData.map((item, index) => (
            <ExpandableCard key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

const ExpandableCard = ({ title, desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-7">
      <h4 className="text-[24px] text-[#ed2225] font-monument-bold line-clamp-3">
        {title}
      </h4>
      <p
        className={`pt-10 font-monument-light lg:text-xl transition-all duration-300 ${
          isExpanded ? "line-clamp-none" : "line-clamp-8"
        }`}
      >
        {desc}
      </p>
      {desc.split(" ").length > 50 && (
        <button
          onClick={toggleExpand}
          className="mt-4 text-[#ed2225] font-monument-bold hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default Card;

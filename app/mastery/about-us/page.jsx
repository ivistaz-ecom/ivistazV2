import React from "react";
import MasteryAboutUs from "../../../components/Mastery/AboutUs";
const page = () => {
  return (
    <div className="bg-black flex flex-col justify-between min-h-screen pt-24 border-b-2 border-dashed border-[#2D2D2D]">
      <div className="container mx-auto lg:px-0 px-4">
        <MasteryAboutUs />
      </div>
    </div>
  );
};

export default page;

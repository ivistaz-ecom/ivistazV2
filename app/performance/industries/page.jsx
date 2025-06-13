import React from "react";
import IndustriesComponents from "../../../components/Performance/Industries";
const page = () => {
  return (
    <div className="iv-bg  flex flex-col justify-between pt-24 border-b-2 border-dashed border-[#2D2D2D]">
      <div className="container mx-auto lg:px-0 px-4">
        <IndustriesComponents />
      </div>
    </div>
  );
};

export default page;

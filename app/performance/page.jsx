import React from "react";
import PerformanceComponents from "../../components/Performance";
const page = () => {
  return (
    <div className="iv-bg  flex flex-col justify-between pt-24 border-b-2 border-dashed border-[#2D2D2D] min-h-screen">
      <div className="container mx-auto lg:px-0 px-4">
        <PerformanceComponents />
      </div>
    </div>
  );
};

export default page;

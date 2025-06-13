import React from "react";
import PrivacyPolicy from "../../components/PrivacyPolicy";
const page = () => {
  return (
    <div className="bg-black flex flex-col justify-between py-24 border-b-2 border-dashed border-[#2D2D2D]">
      <div className="container mx-auto lg:px-0 px-4">
        {" "}
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default page;

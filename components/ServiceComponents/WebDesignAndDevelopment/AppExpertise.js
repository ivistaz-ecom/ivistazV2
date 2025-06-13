import React from "react";

const AppExpertise = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="text-[#ed2023] text-[24px] font-monument-bold pt-5">
            Web and Mobile App Expertise:
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 py-5">
          <div className="bg-white h-28 w-full shadow-2xl flex justify-center items-center rounded-2xl">
            <p className="text-center">
              User Interface (UI) and User Experience (UX) design
            </p>
          </div>
          <div className="bg-white h-28 w-full shadow-2xl flex justify-center items-center rounded-2xl">
            <p className="text-center">Information Architecture</p>
          </div>
          <div className="bg-white h-28 w-full shadow-2xl flex justify-center items-center  rounded-2xl">
            <p className="text-center">Illustrations and animations</p>
          </div>
          <div className="bg-white h-28 w-full shadow-2xl flex justify-center items-center rounded-2xl">
            <p className="text-center">Dynamic and responsive designs</p>
          </div>
          <div className="bg-white h-28 w-full shadow-2xl flex justify-center items-center  rounded-2xl">
            <p className="text-center">Mobile responsiveness</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppExpertise;

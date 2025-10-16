import React from "react";
import Image from "next/image";

const QuestionOfTheMonth = () => {
  return (
    <>
      <div className="bg-[#E0091C] flex justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center py-10">
          <div>
            <Image
              src="/sept-newsletter/question.svg"
              alt="white"
              width={600}
              height={600}
              className="lg:px-0 px-4"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 lg:pt-16 pt-8 text-center lg:px-0 px-4">
            <h4 className="text-white lg:text-3xl text-2xl myriad-pro-semibold w-2/3">
            If you had to survive one horror movie with your team, which one would it be, and
            </h4>
            <p className="text-[#FFCF03] lg:text-7xl text-4xl myriad-pro-semibold">
            who’s getting eaten first?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionOfTheMonth;

import React from "react";
import Image from "next/image";

const QuestionOfTheMonth = () => {
  return (
    <>
      <div className="bg-[#E0091C] flex justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center py-10">
          <div>
            <Image
              src="/nov-newsletter/question.png"
              alt="white"
              width={1200}
              height={1000}
              className="lg:px-0 px-4 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionOfTheMonth;

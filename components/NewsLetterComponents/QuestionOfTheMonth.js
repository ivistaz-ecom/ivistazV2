import React from "react";
import Image from "next/image";

const QuestionOfTheMonth = () => {
  return (
    <>
      <div className="bg-[#092F87] flex justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center py-10">
          <div>
            <Image
              src="/news-letter/qus-white.svg"
              alt="white"
              width={800}
              height={800}
            />
          </div>
          <div>
            <Image
              src="/news-letter/office-yellow.svg"
              alt="white"
              width={600}
              height={600}
              className="py-10"
            />
          </div>
        </div>
      </div>
      <div className="py-10 container mx-auto">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div>
            <Image
              src="/news-letter/ad-of-month.svg"
              alt="question-of-the-month"
              width={700}
              height={700}
              className="lg:px-0 px-4"
            />
          </div>
          <div>
            <Image
              src="/news-letter/fed.png"
              alt="question-of-the-month"
              width={600}
              height={600}
              className="lg:px-0 px-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionOfTheMonth;

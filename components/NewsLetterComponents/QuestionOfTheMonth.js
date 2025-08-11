import React from "react";
import Image from "next/image";

const QuestionOfTheMonth = () => {
  return (
    <>
      <div className="py-10 container mx-auto">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div>
            <Image
              src="/news-letter/question.svg"
              alt="question-of-the-month"
              width={400}
              height={400}
              className="lg:px-0 px-4"
            />
          </div>
          <div>
            <Image
              src="/news-letter/office.svg"
              alt="question-of-the-month"
              width={400}
              height={400}
              className="border-b-2 pb-10 lg:px-0 px-4"
            />
          </div>
          <div>
            <Image
              src="/news-letter/ads.svg"
              alt="question-of-the-month"
              width={400}
              height={400}
              className="lg:px-0 px-4"
            />
          </div>
          <div>
            <Image
              src="/news-letter/fedex.png"
              alt="question-of-the-month"
              width={400}
              height={400}
              className="lg:px-0 px-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionOfTheMonth;

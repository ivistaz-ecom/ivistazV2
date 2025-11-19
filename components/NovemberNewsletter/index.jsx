import React from "react";
import Banner from "./Banner";
import QuestionOfTheMonth from "./QuestionOfTheMonth";
import PictureOfTheMonth from "./PictureOfTheMonth";
import MemeOfTheMonth from "./MemeOfTheMonth";
import AdOfTheMonth from "./AdOfTheMonth";
import Introduction from "./Introduction";
import NoHighlights from "./NoHighlights";
import Winter from "./winter";

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Introduction />
        <NoHighlights />
        <Winter />
        <QuestionOfTheMonth />
        <AdOfTheMonth />
        <PictureOfTheMonth />
        <MemeOfTheMonth />
      </div>
    </>
  );
};

export default index;

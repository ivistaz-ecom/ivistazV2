import React from "react";
import Banner from "./Banner";
import LastTime from "./LastTime";
import Highlight from "./Highlight";
import Winner from "./Winner";
import QuestionOfTheMonth from "./QuestionOfTheMonth";
import PictureOfTheMonth from "./PictureOfTheMonth";
import MemeOfTheMonth from "./MemeOfTheMonth";
import SpecialSection from "./SpecialSection";
import Answer from "./Answer";
import AdOfTheMonth from "./AdOfTheMonth";

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <LastTime />
        <Highlight />
        <Winner />
        <SpecialSection />
        <Answer />
        <QuestionOfTheMonth />
        <AdOfTheMonth />
        <PictureOfTheMonth />
        <MemeOfTheMonth />
      </div>
    </>
  );
};

export default index;

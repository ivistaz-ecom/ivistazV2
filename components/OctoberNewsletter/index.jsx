import React from "react";
import Banner from "./Banner";
import QuestionOfTheMonth from "./QuestionOfTheMonth";
import PictureOfTheMonth from "./PictureOfTheMonth";
import MemeOfTheMonth from "./MemeOfTheMonth";
import AdOfTheMonth from "./AdOfTheMonth";
import Hello from "./Hello";
import Onam from "./Onam";
import Fridazed from "./Fridazed";

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Hello />
        <Onam />
        <Fridazed />
        <QuestionOfTheMonth />
        <AdOfTheMonth />
        <PictureOfTheMonth />
        <MemeOfTheMonth />
      </div>
    </>
  );
};

export default index;

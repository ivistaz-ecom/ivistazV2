import React from "react";
import Banner from "./Banner";
import August from "./August";
import Grie from "./Grie";
import Announcement from "./Announcement";
import HighlightOfTheMonth from "./HighlightOfTheMonth";
import ArtOfSaying from "./ArtOfSaying/ArtOfSaying";
import SeoSection from "./SeoSection";
import QuestionOfTheMonth from "./QuestionOfTheMonth";
import PictureOfTheMonth from "./PictureOfTheMonth";
import MemeOfTheMonth from "./MemeOfTheMonth";
import FunnyQuotes from "./FunnyQuotes";

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <August />
        <Grie />
        <Announcement />
        <FunnyQuotes />
        <HighlightOfTheMonth />
        <ArtOfSaying />
        <SeoSection />
        <QuestionOfTheMonth />
        <PictureOfTheMonth />
        <MemeOfTheMonth />
      </div>
    </>
  );
};

export default index;

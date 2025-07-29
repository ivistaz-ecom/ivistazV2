import React from "react";
import Banner from "./Banner";
import WeWork from "./WeWork";
import WhatWeOffer from "./WhatWeOffer";
import Results from "./Results";
import EComFooter from "./EComFooter";
import WhyChooseUS from "./WhyChooseUS";
import HowWeWork from "../ECommerceLandingPage/HowWeWork/HowWeWork";

const index = () => {
  return (
    <div>
      <Banner />
      <WeWork />
      <WhatWeOffer />
      <Results />
      <HowWeWork />
      <WhyChooseUS />
      <EComFooter />
    </div>
  );
};

export default index;

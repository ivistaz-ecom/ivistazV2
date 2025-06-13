import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import CaseStudiesNew from "./CaseStudiesNew";
import ExploreCaseStudiesButton from "./ExploreCaseStudies";
import EverythingConnect from "./EverythingConnect";
import ExploreOurSolutions from "./ExploreOurSolutions";
import PartnerCarousel from "./Partner";
import { AnimatedTestimonials } from "./AnimationCard";
import Count from "./Count";
import WeListen from "./WeListen";
import Accordion from "./Accordion";
import LatestInsights from "./LatestInsights";
import Footer from "./Footer";

const index = () => {
  return (
    <div>
      <Banner />
      <CaseStudiesNew />
      <ExploreCaseStudiesButton />
      <EverythingConnect />
      <ExploreOurSolutions />
      <PartnerCarousel />
      <AnimatedTestimonials />
      <Count />
      <WeListen />
      <Accordion />
      <LatestInsights />
    </div>
  );
};

export default index;

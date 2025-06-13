import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import CaseStudiesCard from "./CaseStudiesCard";
import ContactUs from "./ContactUs";

const index = () => {
  return (
    <div>
      <Banner />
      <Content />
      <ContactUs />
      <CaseStudiesCard />
    </div>
  );
};

export default index;

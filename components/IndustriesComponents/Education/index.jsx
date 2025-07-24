import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import ContactUs from "./ContactUs";
import CaseStudiesCard from "./CaseStudiesCard";

const index = () => {
  return (
    <div>
      <Banner />
      <Content />
      <ContactUs />
      {/* <CaseStudiesCard /> */}
    </div>
  );
};

export default index;

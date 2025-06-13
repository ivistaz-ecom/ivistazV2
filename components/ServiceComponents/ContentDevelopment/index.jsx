import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Banner from "./Banner";
import Content from "./Content";
import LongForm from "./LongForm";
import ShortContent from "./ShortContent";

const index = () => {
  return (
    <div>
      <BreadCrumbs />
      <Banner />
      <Content />
      <LongForm />
      <ShortContent />
    </div>
  );
};

export default index;

import React from "react";
import Count from "./Count";
import BreadCrumb from "./BreadCrumb";
import Content from "./Content";

const index = () => {
  return (
    <div>
      <BreadCrumb />
      <Count />
      <Content />
    </div>
  );
};

export default index;
